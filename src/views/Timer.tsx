import React from "react";

import { useTimerLogic } from "../hooks/useTimerLogic";

import BreathUX from "../components/BreathUX";
import { getPhaseByIndex } from "../utils/phases";

const Timer: React.FC = () => {
  const {
    state: { session, goal },
    callBacks: { handleClick },
  } = useTimerLogic();

  if (session.count < 0) return <>ready {session.count}</>

  return (
    <div id="timer">
      <BreathUX />
      <p>
        {getPhaseByIndex(session.phaseIndex).label}: {session.count}/{goal.intervals[session.phaseIndex]}
      </p>
      <p>
        breaths so far: {session.cycle}/{goal.cycles}
      </p>

      <button onClick={() => handleClick(false)}>Pause</button>
    </div>
  );
};

export default Timer;
