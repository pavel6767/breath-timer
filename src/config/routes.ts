import { ComponentType } from "react";

import Home from "../views/Home";
import Finished from "../views/Finished";
import Timer from "../views/Timer";

interface Route {
  path: string;
  Element: ComponentType;
}
interface Routes {
  [key: string]: Route;
}

const routes: Routes = {
  HOME: { path: "/", Element: Home },
  TIMER: { path: "/timer", Element: Timer },
  FINISHED: { path: "/finished", Element: Finished },
};

export default routes;
