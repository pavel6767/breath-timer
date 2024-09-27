import { useNavigate } from 'react-router-dom'
import { StateContext } from '../context'
import { useContext } from 'react'
import routes from '../config/routes'

export default () => {
  const { intervals } = useContext(StateContext)
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(routes.FINISHED.path)
  }
  return (
    <div id="timer">
      Timer: {intervals}
      <button onClick={handleClick}>Pause</button>
    </div>
  )
}