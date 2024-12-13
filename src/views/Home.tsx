import React, { FormEvent, useContext, useEffect } from "react";
import { StateContext } from "../context";
import { useNavigate } from "react-router-dom";
import routes from "../config/routes";
import { initialSession } from "../utils/state";
import PhaseSelection from "../components/PhaseSelection";
import { ProgressContext } from "../context/progress";
import { formatSecToTime } from "../utils";

const Home: React.FC = () => {
  const { setSession } = useContext(StateContext);
  const { progress } = useContext(ProgressContext);
  const navigate = useNavigate();

  useEffect(() => {
    setSession({ ...initialSession });
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
