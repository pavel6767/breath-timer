import { useContext } from "react";
import { GoalContext } from "../context/Goal";


export const usePhaseSelectionLogic = () => {
  const {
    goal: { intervals, cycles },
    setGoal,
  } = useContext(GoalContext);

  const handlePresetClick = (newGoals: number[]) => {
    setGoal((prevGoal) => ({ ...prevGoal, intervals: newGoals }));
  };

  const handlePhaseChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(ev.target.dataset.index);
    setGoal((prevGoal) => {
      const newIntervals = [...prevGoal.intervals];
      newIntervals[index] = Number(ev.target.value);
      return { ...prevGoal, intervals: newIntervals };
    });
  };

  const handleCycleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setGoal((state) => ({
      ...state,
      cycles: Number(ev.target.value),
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
