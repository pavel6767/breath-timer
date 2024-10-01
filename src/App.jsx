import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { StateContext } from './context';

import './App.css'
import routes from './config/routes';
import { initialSession } from './utils/state';

function App() {
  const [session, setSession] = useState({ ...initialSession })
  const [goal, setGoal] = useState({
    intervals: [4, 7, 8, 0],
    cycles: 2
  })

  return (
    <StateContext.Provider value={{ session, setSession, goal, setGoal }}>
      <Routes>
        {Object.values(routes).map(r => <Route key={r.path} path={r.path} element={<r.Element />} />)}
      </Routes>
    </StateContext.Provider>
  )
}

export default App
