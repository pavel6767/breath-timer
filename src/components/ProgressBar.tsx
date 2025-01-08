import React from "react";
import { Box, Progress } from "@chakra-ui/react";

interface iProgressBarProps {
  current: number;
  max: number;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

const ProgressBar: React.FC<iProgressBarProps> = ({
  current,
  max,
  children,
  size = "sm",
}) => (
  <Box fontSize="lg" fontWeight="medium" width="80%" maxWidth="300px">
    {children}
    <Progress colorScheme="green" size={size} value={current} max={max} />
  </Box>
);

export default ProgressBar;