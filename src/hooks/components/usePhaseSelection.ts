import { useContext } from "react";

import { GoalContext } from "@/context/Goal";

export const usePhaseSelection = () => {
  const {
    goal: { intervals, cycles },
    setGoal,
  } = useContext(GoalContext);

  const handlePresetClick = (newGoals: number[]) => {
    setGoal((prevGoal) => ({ ...prevGoal, intervals: newGoals }));
  };

  const handlePhaseChange = (value: string, index: number) => {
    setGoal((prevGoal) => {
      const newIntervals = [...prevGoal.intervals];
      newIntervals[index] = Number(value);
      return { ...prevGoal, intervals: newIntervals };
    });
  };

  const handleCycleChange = (cycles: string) => {
    setGoal((state) => ({
      ...state,
      cycles: Number(cycles),
    }));
  };

  return {
    context: { intervals, cycles },
    callbacks: {
      handlePhaseChange,
      handlePresetClick,
      handleCycleChange,
    },
  };
};
