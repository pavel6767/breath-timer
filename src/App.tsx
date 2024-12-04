import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { StateContext } from "./context";

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

  const contextValue: IMeditationState = { session, setSession, goal, setGoal };

  return (
    <StateContext.Provider value={contextValue}>
      <Routes>
        {Object.values(routes).map((r) => (
          <Route key={r.path} path={r.path} element={<r.Element />} />
        ))}
      </Routes>
    </StateContext.Provider>
  );
}

export default App;
