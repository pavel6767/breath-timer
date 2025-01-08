import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { IContextProviderProps } from "../types";

export const ThemeProvider: React.FC<IContextProviderProps> = ({
  children,
}) => <ChakraProvider>{children}</ChakraProvider>;
