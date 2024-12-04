import { createContext } from "react";
import { IMeditationState } from "../types";
import { initialSession } from "../utils/state";

const defaultState = {
  session: initialSession,
  setSession: () => {},
  goal: { intervals: [], cycles: 0 },
  setGoal: () => {},
};

export const StateContext = createContext<IMeditationState>(defaultState);