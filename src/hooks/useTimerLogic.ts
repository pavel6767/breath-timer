import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { StateContext } from "../context";
import { ISession } from "../types";
import routes from "../config/routes";

export const useTimerLogic = () => {
  const navigate = useNavigate();
  const { session, setSession, goal } = useContext(StateContext);
  const liveRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = (done: boolean) => {
    setSession((state: ISession) => ({
      ...state,
      count: 0,
      phaseIndex: 0,
      done: done,
    }));
    navigate(routes.FINISHED.path);
  };

  useEffect(() => {
    liveRef.current = setInterval(() => {
      setSession((state) => {
        if (state.cycle === goal.cycles) {
          liveRef.current && clearInterval(liveRef.current);
          handleClick(true);
        }

        const newState = { ...state };
        newState.count++;
        if (newState.count > goal.intervals[newState.phaseIndex]) {
          newState.count = 0;
          newState.phaseIndex++;
          while (goal.intervals[newState.phaseIndex] === 0) {
            if (newState.phaseIndex >= goal.intervals.length) {
              newState.cycle++;
              newState.phaseIndex = 0;
            }
            newState.phaseIndex++;
          }
          if (newState.phaseIndex === goal.intervals.length) {
            newState.phaseIndex = 0;
            newState.cycle++;
          }
        }
        return newState;
      });
    }, 1000);

    return () => {
      if (liveRef.current) clearInterval(liveRef.current);
    };
  }, []);

  return {
    state: {
      session,
      goal,
    },
    callBacks: { handleClick },
  };
};
