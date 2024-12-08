import React, { useContext, useEffect } from "react";
import { StateContext } from "../context";
import { useNavigate } from "react-router-dom";
import routes from "../config/routes";
import { initialSession } from "../utils/state";

const Home: React.FC = () => {
  const { setSession } = useContext(StateContext);
  const navigate = useNavigate();

  useEffect(() => {
    setSession({ ...initialSession });
  }, []);

  return (
    <div id="Home">
      <div id="options">
        <p>
          Number of Breaths: <input />
        </p>
        <p>
          Interval type: <input />
        </p>
      </div>
      <button onClick={() => navigate(routes.TIMER.path)}>Start</button>
    </div>
  );
};

export default Home;
