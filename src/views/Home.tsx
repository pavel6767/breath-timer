import React, { FormEvent, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { SessionContext, initialState } from "../context/Session";
import { ProgressContext } from "../context/Progress";
import routes from "../config/routes";

import PhaseSelection from "../components/PhaseSelection";

import { formatSecToTime } from "../utils";

const Home: React.FC = () => {
  const { setSession } = useContext(SessionContext);
  const { progress } = useContext(ProgressContext);
  const navigate = useNavigate();

  useEffect(() => {
    setSession({ ...initialState });
  }, []);

  const handleStart = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    navigate(routes.TIMER.path);
  };

  return (
    <div id="Home">
      <PhaseSelection onSubmit={handleStart} />
      <p>Session will last: {formatSecToTime(progress.total)}</p>
    </div>
  );
};

export default Home;
