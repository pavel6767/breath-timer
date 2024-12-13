import React from "react";

export interface ISession {
  count: number;
  phaseIndex: number;
  cycles: number;
  done: boolean;
}

export interface IGoal {
  intervals: number[];
  cycles: number;
}

export interface IMeditationState {
  session: ISession;
  setSession: React.Dispatch<React.SetStateAction<ISession>>;
  goal: IGoal;
  setGoal: React.Dispatch<React.SetStateAction<IGoal>>;
}
