import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";

import routes from "../config/routes";
import { GoalContext } from "../context/Goal";
import { SessionContext } from "../context/Session";

export const useTimerLogic = () => {
  const navigate = useNavigate();
  const { session, setSession } = useContext(SessionContext);
  const { goal } = useContext(GoalContext);
  const liveRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = (done: boolean) => {
    setSession((state) => ({
      ...state,
      count: -3,
      phaseIndex: 0,
      done: done,
    }));
    navigate(routes.FINISHED.path);
  };

  useEffect(() => {
    liveRef.current = setInterval(() => {
      setSession((state) => {
        if (state.cycles === goal.cycles) {
          liveRef.current && clearInterval(liveRef.current);
          handleClick(true);
        }

        const newState = { ...state };
        newState.count++;
        if (newState.count === goal.intervals[newState.phaseIndex]) {
          newState.count = 0;
          newState.phaseIndex++;
          while (goal.intervals[newState.phaseIndex] === 0) {
            if (newState.phaseIndex >= goal.intervals.length) {
              newState.cycles++;
              newState.phaseIndex = 0;
            }
            newState.phaseIndex++;
          }
          if (newState.phaseIndex === goal.intervals.length) {
            newState.phaseIndex = 0;
            newState.cycles++;
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
