import React, { createContext, useState } from "react";
import { IContextProviderProps } from "../types";

interface ISessionState {
  count: number;
  phaseIndex: number;
  cycles: number;
  done: boolean;
}

interface ISessionContextValue {
  session: ISessionState;
  setSession: React.Dispatch<React.SetStateAction<ISessionState>>;
}

export const initialState: ISessionState = {
  count: -3,
  phaseIndex: 0,
  cycles: 0,
  done: false,
};

export const SessionContext = createContext<ISessionContextValue>({
  session: initialState,
  setSession: () => {},
});

export const SessionProvider: React.FC<IContextProviderProps> = ({
  children,
}) => {
  const [session, setSession] = useState<ISessionState>(initialState);
  return (
    <SessionContext.Provider
      value={{
        session,
        setSession,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
