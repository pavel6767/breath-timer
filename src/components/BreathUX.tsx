import React from "react";

import "../styles/timer.css";
import { useBreathUXLogic } from "../hooks/useBreathUXLogic";


const BreathUX: React.FC= () => {
  const {state: {breathingPhase}} = useBreathUXLogic();

  return (
    <div id="animation-max">
      <div id="animation-min">
        <div id="animation" className={breathingPhase}></div>
      </div>
    </div>
  );
};

export default BreathUX;
