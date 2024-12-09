import React, { useContext, useEffect } from "react";
import { StateContext } from "../context";
import { useNavigate } from "react-router-dom";
import routes from "../config/routes";
import { initialSession } from "../utils/state";
import PhaseInput from "../components/PhaseInput";

const Home: React.FC = () => {
  const { setSession, setGoal, goal } = useContext(StateContext);
  const navigate = useNavigate();

  useEffect(() => {
    setSession({ ...initialSession });
  }, []);

  const handlePhasesChange = (intervals: number[]) => {
    setGoal((prevGoal) => ({
      ...prevGoal,
      intervals,
    }));
  };

  return (
    <div id="Home">
      <PhaseInput onSubmit={handlePhasesChange} />
      <button onClick={() => navigate(routes.TIMER.path)}>Start</button>
    </div>
  );
};

export default Home;
