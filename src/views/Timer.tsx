import React, { useContext } from "react";

import { useTimerLogic } from "../hooks/useTimerLogic";

import BreathUX from "../components/BreathUX";
import { getPhaseByIndex } from "../utils/phases";
import { ProgressContext } from "../context/Progress";
import { formatSecToTime } from "../utils";

const Timer: React.FC = () => {
  const {
    state: { session, goal },
    callBacks: { handleClick },
  } = useTimerLogic();
  
  const { progress } = useContext(ProgressContext);

  if (session.count < 0) return <>ready {session.count}</>

  return (
    <div id="timer">
      <BreathUX />
      <p>
        {getPhaseByIndex(session.phaseIndex).label}: {session.count}/
        {goal.intervals[session.phaseIndex]}
      </p>
      <p>
        breaths so far: {session.cycles}/{goal.cycles}
      </p>
      <p>
        {progress.progress < progress.total
          ? `Time Practiced: ${formatSecToTime(progress.progress)};
        out of ${formatSecToTime(progress.total)}`
          : `Finished! ${formatSecToTime(progress.total)}`}
      </p>
      <button onClick={() => handleClick(false)}>Pause</button>
    </div>
  );
};

export default Timer;
