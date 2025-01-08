import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import routes from "@/config/routes";
import { initialState, SessionContext } from "@/context/Session";
import { ProgressContext } from "@/context/Progress";

export const useFinished = () => {
  const navigate = useNavigate();
  const { session, setSession } = useContext(SessionContext);
  const { progress } = useContext(ProgressContext);
  const handleClick = () => {
    navigate(routes.HOME.path);
  };

  const handleTimerClick = () => {
    if (session.done) setSession({ ...initialState });
    navigate(routes.TIMER.path);
  };
  return {
    state: {
      session,
      progress,
    },
    callbacks: {
      handleClick,
      handleTimerClick,
    },
  };
};
