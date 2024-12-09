import { useState, useContext } from "react";
import { StateContext } from "../context";

export const usePhaseInputLogic = (onSubmit: Function) => {
  const {
    goal: { intervals },
  } = useContext(StateContext);

  const [goals, setGoals] = useState(intervals);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(goals);
  };

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(ev.target.dataset.index);
    setGoals((prevGoals) => {
      const newGoals = [...prevGoals];
      newGoals[index] = Number(ev.target.value);
      return newGoals;
    });
  };

  return {
    state: { goals },
    callbacks: {
      handleChange,
      handleSubmit,
    },
  };
};
