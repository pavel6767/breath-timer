import React from "react";
import { getPhaseByIndex, PHASES } from "../utils/phases";
import { usePhaseInputLogic } from "../hooks/usePhaseInputLogic";

interface PhaseInputProps {
  onSubmit: (intervals: number[]) => void;
}

const PhaseInput: React.FC<PhaseInputProps> = ({ onSubmit }) => {
  const {
    state: { goals },
    callbacks: { handleChange, handleSubmit },
  } = usePhaseInputLogic(onSubmit);

  const presets: [string, number[]][] = [
    ["Box Breath", [4, 4, 4, 4]],
    ["Belly Breathing", [5, 0, 5, 0]],
    ["4-7-8 Breathing", [4, 7, 8, 0]],
    ["Buteyko Breathing", [3, 0, 3, 3]],
  ];

  return (
    <>
      {presets.map((set, index) => (
        <div key={`preset-${index}`}>
          <p>{set[0]}</p>
          <p>
            {set[1].map((phase, inx) => (
              <span key={`phase-${index}-${inx}`}>
                {getPhaseByIndex(inx).label}: {phase}
              </span>
            ))}
          </p>
          <button onClick={() => onSubmit(set[1])}>Select</button>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        {goals.map((duration, index) => (
          <label key={index}>
            {getPhaseByIndex(index).label}:
            <input
              type="number"
              min={index % 2 === 0 ? 1 : 0}
              value={duration}
              data-index={index}
              onChange={handleChange}
            />
          </label>
        ))}
        <button type="submit">Set Phases</button>
      </form>
    </>
  );
};

export default PhaseInput;
