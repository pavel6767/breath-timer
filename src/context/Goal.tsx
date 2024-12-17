import React, { createContext, useState } from "react";
import { IContextProviderProps } from "../types";

interface IGoalState {
  intervals: number[];
  cycles: number;
}

interface IGoalContextValue {
  goal: IGoalState;
  setGoal: React.Dispatch<React.SetStateAction<IGoalState>>;
}

export const initialState: IGoalState = {
  intervals: [4, 7, 8, 0],
  cycles: 4,
};


const initialContext: IGoalContextValue = {
  goal: initialState,
  setGoal: () => {},
};

export const GoalContext = createContext<IGoalContextValue>(initialContext);

export const GoalProvider: React.FC<IContextProviderProps> = ({
  children,
}) => {
  const [goal, setGoal] = useState<IGoalState>(initialState);
  return (
    <GoalContext.Provider
      value={{
        goal,
        setGoal,
      }}
    >
      {children}
    </GoalContext.Provider>
  );
};