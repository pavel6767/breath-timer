import React, { useContext } from "react";

import { VStack, Text, Button, Progress } from "@chakra-ui/react";

import { useTimer } from "@/hooks/views/useTimer";

import BreathUX from "@/components/BreathUX";

import { getPhaseByIndex } from "@/utils/phases";
import { ProgressContext } from "@/context/Progress";
import { formatSecToTime } from "@/utils";
import ProgressBar from "@/components/ProgressBar";

const Timer: React.FC = () => {
  const {
    state: { session, goal },
    callBacks: { handleClick },
  } = useTimer();

  const { progress } = useContext(ProgressContext);

  const progressBarsData = [
    {
      current: session.count,
      max: goal.intervals[session.phaseIndex],
      fragment: (
        <>
          {getPhaseByIndex(session.phaseIndex).label}: {session.count}/
          {goal.intervals[session.phaseIndex]}
        </>
      ),
    },
    {
      current: session.cycles,
      max: goal.cycles,
      fragment: (
        <>
          Cycles so far: {session.cycles}/{goal.cycles}
        </>
      ),
    },
    {
      current: progress.progress,
      max: progress.total,
      fragment: (
        <>
          Time Practiced:{" "}
          <Text fontWeight="bold" as="span">
            {formatSecToTime(progress.progress)}
          </Text>{" "}
          /{" "}
          <Text fontWeight="bold" as="span">
            {formatSecToTime(progress.total)}
          </Text>
        </>
      ),
    },
  ];

  return (
    <VStack
      id="timer"
      spacing={4}
      align="center"
      p={6}
      borderRadius="lg"
      bg="white"
      boxShadow="lg"
      maxW="400px"
      mx="auto"
    >
      {session.count < 0 ? (
        <Text fontSize="lg" fontWeight="medium">
          ready {session.count}
        </Text>
      ) : (
        <>
          <BreathUX />

          {progressBarsData.map((data, index) => (
            <ProgressBar
              {...{
                current: data.current,
                max: data.max,
                key: index,
              }}
            >
              {data.fragment}
            </ProgressBar>
          ))}

          <Button
            onClick={() => handleClick(false)}
            colorScheme="blue"
            size="md"
            width="100px"
          >
            Pause
          </Button>
        </>
      )}
    </VStack>
  );
};

export default Timer;
