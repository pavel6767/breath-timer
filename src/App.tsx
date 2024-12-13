import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { StateContext } from "./context";
import { IProgressContext, IProgressValue, ProgressContext, initialState } from "./context/progress";

import "./App.css";
import routes from "./config/routes";
import { initialSession } from "./utils/state";
import { ISession, IMeditationState } from "./types";

function App() {
  const [session, setSession] = useState<ISession>({ ...initialSession });
  const [goal, setGoal] = useState({
    intervals: [4, 7, 8, 0],
    cycles: 2,
  });
  const [progress, setProgress] = useState<IProgressValue>(initialState);

  const sessionCtxValue: IMeditationState = { session, setSession, goal, setGoal };
  const progressCtxValue: IProgressContext = { progress, setProgress };
  
  useEffect(() => {
    setProgress({
      progress:
        session.cycles * goal.intervals.reduce((acc, curr) => acc + curr, 0),
      total: goal.cycles * goal.intervals.reduce((acc, curr) => acc + curr, 0),
    });
  }, [goal.intervals, goal.cycles, session.cycles]);

  return (
    <StateContext.Provider value={sessionCtxValue}>
      <ProgressContext.Provider value={progressCtxValue}>
        <Routes>
          {Object.values(routes).map((r) => (
            <Route key={r.path} path={r.path} element={<r.Element />} />
          ))}
        </Routes>
      </ProgressContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
