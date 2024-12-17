import { useContext, useEffect } from "react";

import { SessionContext } from "../context/Session";
import { GoalContext } from "../context/Goal";

import { getPhaseByIndex } from "../utils/phases";

export const useBreathUXLogic = () => {
  const { session } = useContext(SessionContext);
  const { goal } = useContext(GoalContext);

  
  const createAnimation = (animationChanges: string, phaseIndex: number) => {
    const styleSheet = document.styleSheets[0];
    if (!styleSheet) return;
    
    const phaseClassName = getPhaseByIndex(phaseIndex).className;
    
    styleSheet.insertRule(
      `#animation.${phaseClassName} { ${animationChanges} transition: all ${goal.intervals[phaseIndex]}s ease; }`,
      styleSheet.cssRules.length
    );
  };
  
  useEffect(() => {
    const animations = [
        "transform: scale(1.5);",
        "transform: scale(1.5);",
        "transform: scale(1);",
        "transform: scale(1);",
    ];
    animations.forEach((animation, index) => createAnimation(animation, index));
  }, []);

  return {
    state: {
      breathingPhase: getPhaseByIndex(session.phaseIndex).className,
    },
  };
};
