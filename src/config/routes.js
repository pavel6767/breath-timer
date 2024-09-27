import Home from '../views/Home';
import Finished from '../views/Finished';
import Timer from '../views/Timer';

export default {
    HOME: { path: "/", Element: Home },
    TIMER: { path: "/timer", Element: Timer },
    FINISHED:  { path: "/finished", Element: Finished },
}