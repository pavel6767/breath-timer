import { useNavigate } from 'react-router-dom'
import routes from '../config/routes'
import { StateContext } from '../context'
import { useContext } from 'react'
import { initialSession } from '../utils/state'

export default () => {
  const navigate = useNavigate()
  const { session, setSession } = useContext(StateContext)
  const handleClick = () => {
    navigate(routes.HOME.path)
  }
  
  const handleTimerClick = () => {
    if (!!session.done) setSession({ ...initialSession })
    navigate(routes.TIMER.path)
  }
  return (
    <div id="finished"> 
      Finished
      <pre>{JSON.stringify(session)}</pre>
      <button onClick={handleTimerClick}>
        {session.done ? 'Restart' : 'Continue'}
      </button>
      <button onClick={handleClick}>Home</button>
    </div>
  )
}