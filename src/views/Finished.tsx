import React from "react";
import {
  VStack,
  Text,
  Button,
  Code,
  ButtonGroup,
  Heading,
} from "@chakra-ui/react";

import { useFinished } from "@/hooks/views/useFinished";
import { formatSecToTime } from "@/utils";

const Finished: React.FC = () => {
  const {
    state: { session, progress },
    callbacks: { handleClick, handleTimerClick },
  } = useFinished();

  return (
    <VStack
      id="finished"
      spacing={6}
      p={6}
      borderRadius="lg"
      bg="white"
      boxShadow="md"
      align="center"
    >
      <Heading size="lg">{session.done ? "Finished" : "Paused"}</Heading>

      <Text fontSize="md">
        {/* {progress.progress < progress.total
          ? `Time Practiced: ${formatSecToTime(progress.progress)}
        out of ${formatSecToTime(progress.total)}`
          : `Finished! ${formatSecToTime(progress.total)}`} */}
        Time Practiced: {formatSecToTime(progress.progress)} &nbsp;
        out of {formatSecToTime(progress.total)}
      </Text>

      <ButtonGroup spacing={4}>
        <Button colorScheme="blue" onClick={handleTimerClick}>
          {session.done ? "Restart" : "Continue"}
        </Button>

        <Button variant="outline" onClick={handleClick}>
          Home
        </Button>
      </ButtonGroup>
    </VStack>
  );
};

export default Finished;
