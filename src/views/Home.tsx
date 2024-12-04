import React, { useContext } from 'react'
import { StateContext } from '../context'
import { useNavigate } from 'react-router-dom'
import routes from '../config/routes'
import { initialSession } from '../utils/state'

const Home: React.FC = () => {
  const { setSession } = useContext(StateContext)
  const navigate = useNavigate()
  const handleClick = () => {
    setSession({ ...initialSession })
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

export default Home