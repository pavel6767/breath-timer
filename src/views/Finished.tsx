import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import routes from '../config/routes'
import { initialState, SessionContext } from '../context/Session'
import { ProgressContext } from '../context/Progress'
import { formatSecToTime } from '../utils'

const Finished: React.FC = () => {
  const navigate = useNavigate()
  const { session, setSession } = useContext(SessionContext)
  const { progress } = useContext(ProgressContext);
  const handleClick = () => {
    navigate(routes.HOME.path)
  }
  
  const handleTimerClick = () => {
    if (session.done) setSession({ ...initialState })
    navigate(routes.TIMER.path)
  }
  return (
    <div id="finished">
      {session.done ? "Finished" : "Paused"}
      <pre>{JSON.stringify(session)}</pre>
      <p>
        {progress.progress < progress.total
          ? `Time Practiced: ${formatSecToTime(progress.progress)};
        out of ${formatSecToTime(progress.total)}`
          : `Finished! ${formatSecToTime(progress.total)}`}
      </p>

      <button onClick={handleTimerClick}>
        {session.done ? "Restart" : "Continue"}
      </button>
      <button onClick={handleClick}>Home</button>
    </div>
  );
}

export default Finished