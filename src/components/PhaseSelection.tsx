import React, { FormEventHandler, useCallback } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Text,
  HStack,
  VStack,
  SimpleGrid,
  Divider,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import { getPhaseByIndex } from "../utils/phases";
import { usePhaseSelection } from "../hooks/components/usePhaseSelection";
import { presets } from "../utils/presets";

interface IPhaseSelectionProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const PhaseSelection: React.FC<IPhaseSelectionProps> = ({ onSubmit }) => {
  const {
    context: { intervals, cycles },
    callbacks: { handlePhaseChange, handlePresetClick, handleCycleChange },
  } = usePhaseSelection();

  return (
    <Box as="form" onSubmit={onSubmit} maxW="800px" mx="auto" p={6}>
      <VStack spacing={8}>
        <Heading size="lg" color="blue.600">
          Breathing Exercise Setup
        </Heading>

        <VStack spacing={6} w="100%">
          <Heading size="md">Presets</Heading>
          <SimpleGrid columns={[1, 2]} spacing={4} w="100%">
            {presets.map((set, index) => (
              <Box
                key={`preset-${index}`}
                borderRadius="lg"
                boxShadow="md"
                bg="white"
                p={4}
                _hover={{ boxShadow: "lg", transform: "translateY(-2px)" }}
                transition="all 0.2s"
              >
                <VStack spacing={3}>
                  <Heading size="sm" color="blue.500">
                    {set[0]}
                  </Heading>
                  <HStack spacing={4} fontSize="sm" color="gray.600">
                    {set[1].map((phase, inx) => (
                      <Text key={`phase-${index}-${inx}`}>
                        {getPhaseByIndex(inx).label}: {phase}
                      </Text>
                    ))}
                  </HStack>
                  <Button
                    colorScheme="blue"
                    variant="outline"
                    onClick={() => handlePresetClick(set[1])}
                  >
                    Select
                  </Button>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>

          <Divider />

          <VStack spacing={6} w="100%">
            <Heading size="md">Custom Timing</Heading>
            <SimpleGrid columns={[1, 2, 4]} spacing={4} w="100%">
              {intervals.map((duration, index) => (
                <FormControl key={index}>
                  <FormLabel color="gray.700">
                    {getPhaseByIndex(index).label}
                  </FormLabel>
                  <NumberInput
                    min={index % 2 === 0 ? 1 : 0}
                    max={12}
                    value={duration}
                    onChange={(value) =>
                      handlePhaseChange(value, index)}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
              ))}
            </SimpleGrid>
          </VStack>

          <Divider />

          <FormControl maxW="200px">
            <FormLabel color="gray.700">Number of Cycles</FormLabel>
            <NumberInput
              min={1}
              max={50}
              value={cycles}
              onChange={handleCycleChange}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <Button
            type="submit"
            colorScheme="blue"
            size="lg"
            w={["100%", "auto"]}
            minW="200px"
            mt={4}
          >
            Begin Exercise
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};

export default PhaseSelection;
