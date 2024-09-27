import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { StateContext } from './context';

import './App.css'
import routes from './config/routes';

function App() {
  const [state, setState] = useState('hi')
  const [intervals, setIntervals] = useState([4,7,8,0])
  
  return (
    <StateContext.Provider value={{ state, setState, intervals, setIntervals }}>
      <Routes>
        {Object.values(routes).map(r => <Route key={r.path} path={r.path} element={<r.Element />} />)}
      </Routes>
    </StateContext.Provider>
  )
}

export default App
