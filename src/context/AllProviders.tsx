import React from "react";
import { SessionProvider } from "./Session";
import { GoalProvider } from "./Goal";
import { ProgressProvider } from "./Progress";
import { IContextProviderProps } from "../types";

const providers = [ProgressProvider, SessionProvider, GoalProvider];

const AllProviders: React.FC<IContextProviderProps> = ({ children }) =>
  providers.reduce((acc, Provider) => <Provider>{acc}</Provider>, children);

export default AllProviders;
