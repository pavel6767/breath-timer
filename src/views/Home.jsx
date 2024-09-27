import { useContext } from 'react'
import { StateContext } from '../context'
import { useNavigate } from 'react-router-dom'
import routes from '../config/routes'

export default () => {
  const { state, setState } = useContext(StateContext)
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(routes.TIMER.path)
  }
  return (
    <div id="Home">
      <div id="options">
        <p>Number of Breaths: <input /></p>
        <p>Interval type: <input /></p>
      </div>
      <button onClick={handleClick}>Start</button>
    </div>
  )
}