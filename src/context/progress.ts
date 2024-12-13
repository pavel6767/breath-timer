import React, { createContext } from "react";

export interface IProgressValue {
  progress: number;
  total: number;
}

export interface IProgressContext {
  progress: IProgressValue;
  setProgress: React.Dispatch<React.SetStateAction<IProgressValue>>;
}

export const initialState: IProgressValue = { progress: 0, total: 0 };

export const defaultContext: IProgressContext = {
  progress: initialState,
  setProgress: () => {},
};

export const ProgressContext = createContext<IProgressContext>(defaultContext);
