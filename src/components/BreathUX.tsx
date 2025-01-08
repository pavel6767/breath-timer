import React from "react";

import { Box } from "@chakra-ui/react";

import "../styles/timer.css";
import { useBreathUX } from "../hooks/components/useBreathUX";

const BreathUX: React.FC = () => {
  const {
    state: { breathingPhase },
  } = useBreathUX();

  return (
    <Box id="animation-max">
      <Box id="animation-min">
        <Box
          id="animation"
          position="absolute"
          w="100%"
          h="100%"
          className={breathingPhase}
        />
      </Box>
    </Box>
  );
};

export default BreathUX;
