import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import routes from '../config/routes'
import { StateContext } from '../context'
import { initialSession } from '../utils/state'

const Finished: React.FC = () => {
  const navigate = useNavigate()
  const { session, setSession } = useContext(StateContext)
  const handleClick = () => {
    navigate(routes.HOME.path)
  }
  
  const handleTimerClick = () => {
    if (session.done) setSession({ ...initialSession })
    navigate(routes.TIMER.path)
  }
  return (
    <div id="finished"> 
      {session.done ? 'Finished' : 'Paused'}
      <pre>{JSON.stringify(session)}</pre>
      <button onClick={handleTimerClick}>
        {session.done ? 'Restart' : 'Continue'}
      </button>
      <button onClick={handleClick}>Home</button>
    </div>
  )
}

export default Finished