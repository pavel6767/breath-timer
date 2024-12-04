import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";

import { StateContext } from "../context";
import routes from "../config/routes";
import { ISession } from "../types";

const labels = ["Inhale", "Hold In", "Exhale", "Hold Out"];

const Timer: React.FC = () => {
  const navigate = useNavigate();
  const { session, setSession, goal } = useContext(StateContext);

  const handleClick = (done: boolean) => {
    setSession((state: ISession) => ({
      ...state,
      count: 0,
      index: 0,
      done: done,
    }));
    navigate(routes.FINISHED.path);
  };

  useEffect(() => {
    const live = setInterval(() => {
      setSession((state) => {
        if (state.cycle === goal.cycles) {
          clearInterval(live);
          handleClick(true);
        }

        const newState = { ...state };
        newState.count++;
        if (newState.count > goal.intervals[newState.index]) {
          newState.count = 0;
          newState.index++;
          while (goal.intervals[newState.index] === 0) {
            if (newState.index >= goal.intervals.length) {
              newState.cycle++;
              newState.index = 0;
            }
            newState.index++;
          }
          if (newState.index === goal.intervals.length) {
            newState.index = 0;
            newState.cycle++;
          }
        }
        return newState;
      });
    }, 1000);
    return () => clearInterval(live);
  }, []);
  return (
    <div id="timer">
      <p>
        {labels[session.index]}: {session.count}/{goal.intervals[session.index]}
      </p>
      <p>
        breaths so far: {session.cycle}/{goal.cycles}
      </p>
      <p>index: {session.index}</p>

      <button onClick={handleClick.bind(null, false)}>Pause</button>
    </div>
  );
};

export default Timer;
