import React from "react";
import { SessionProvider } from "./Session";
import { GoalProvider } from "./Goal";
import { ProgressProvider } from "./Progress";
import { IContextProviderProps } from "../types";
import { ThemeProvider } from "./Theme";

const providers = [
  ThemeProvider,
  ProgressProvider,
  SessionProvider,
  GoalProvider,
];

const AllProviders: React.FC<IContextProviderProps> = ({ children }) =>
  providers.reduce((acc, Provider) => <Provider>{acc}</Provider>, children);

// const AllProviders: React.FC<IContextProviderProps> = ({ children }) => {
//   return (
//     <GoalProvider>
//       <SessionProvider>
//         <ProgressProvider>
//           <ThemeProvider>{children}</ThemeProvider>
//         </ProgressProvider>
//       </SessionProvider>
//     </GoalProvider>
//   );
// };

export default AllProviders;
