import { useNavigate } from 'react-router-dom'
import routes from '../config/routes'

export default () => {
  const navigate = useNavigate()
  const handleClick = (route) => {
    console.log(':P::', { route });
    navigate(route.path)
  }
  return (
    <div id="finished"> 
      Finished
      <button onClick={handleClick.bind(null,routes.TIMER)}>Restart</button>
      <button onClick={handleClick.bind(null,routes.HOME)}>Home</button>
    </div>
  )
}