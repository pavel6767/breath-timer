import { useContext, useEffect } from "react";

import { SessionContext } from "@/context/Session";
import { GoalContext } from "@/context/Goal";

import { getPhaseByIndex } from "@/utils/phases";

export const useBreathUX = () => {
  const { session } = useContext(SessionContext);
  const { goal } = useContext(GoalContext);

  const createAnimation = (animationChanges: string, phaseIndex: number) => {
    const styleSheet = document.styleSheets[0];
    if (!styleSheet) return;

    const phaseClassName = getPhaseByIndex(phaseIndex).className;

    const ruleIndex = styleSheet.insertRule(
      `#animation.${phaseClassName} { ${animationChanges} transition: all ${goal.intervals[phaseIndex]}s ease; }`,
      styleSheet.cssRules.length
    );
    return { styleSheet, ruleIndex };
  };

  useEffect(() => {
    const animations = [
      "transform: scale(1.5);",
      "transform: scale(1.5);",
      "transform: scale(1);",
      "transform: scale(1);",
    ];
    const insertedRules = animations.map((animation, index) =>
      createAnimation(animation, index)
    );
    return () => {
      insertedRules.reverse().forEach((rule) => {
        if (rule) {
          try {
            rule.styleSheet.deleteRule(rule.ruleIndex);
            console.log(":P:: deleted rule", { rule });
          } catch (err) {
            console.error("error: failed to cleanup styling", { err });
          }
        }
      });
    };
  }, []);

  return {
    state: {
      breathingPhase: getPhaseByIndex(session.phaseIndex).className,
    },
  };
};
