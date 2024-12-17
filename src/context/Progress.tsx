import React, { createContext, useContext, useEffect, useState } from "react";
import { IContextProviderProps } from "../types";
import { SessionContext } from "./Session";
import { GoalContext } from "./Goal";

interface IProgressState {
  progress: number;
  total: number;
}

interface IProgressContextValue {
  progress: IProgressState;
  setProgress: React.Dispatch<React.SetStateAction<IProgressState>>;
}

export const initialState: IProgressState = { progress: 0, total: 0 };

export const ProgressContext = createContext<IProgressContextValue>({
  progress: initialState,
  setProgress: () => {},
});

export const ProgressProvider: React.FC<IContextProviderProps> = ({
  children,
}) => {
  const [progress, setProgress] = useState<IProgressState>(initialState);
  const { session } = useContext(SessionContext);
  const { goal } = useContext(GoalContext);

  useEffect(() => {
    const cycleLength = goal.intervals.reduce((acc, curr) => acc + curr, 0);
    const currentProgress =
      session.count + goal.intervals.slice(0,session.phaseIndex).reduce((acc, curr) => acc + curr, 0);
    setProgress({
      progress: (session.cycles * cycleLength) + currentProgress,
      total: goal.cycles * cycleLength,
    });
  }, [goal.intervals, goal.cycles, session.cycles, session.count ]);

  return (
    <ProgressContext.Provider value={{ progress, setProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};
