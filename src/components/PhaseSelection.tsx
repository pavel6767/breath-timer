import React, { FormEventHandler } from "react";
import { getPhaseByIndex } from "../utils/phases";
import { usePhaseSelectionLogic } from "../hooks/usePhaseSelectionLogic";
import { presets } from "../utils/presets";

interface IPhaseSelectionProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const PhaseSelection: React.FC<IPhaseSelectionProps> = ({ onSubmit }) => {
  const {
    context: { intervals, cycles },
    callbacks: { handlePhaseChange, handlePresetClick, handleCycleChange },
  } = usePhaseSelectionLogic();

  return (
    <>
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>Phase Selection</legend>
          <fieldset>
            <legend>Presets</legend>
            {presets.map((set, index) => (
              <section
                key={`preset-${index}`}
                style={{ border: "1px solid black", margin: "10px" }}
                aria-labelledby={`preset-title-${index}`}
              >
                <h3 id={`preset-title-${index}`}>{set[0]}</h3>
                <span>
                  {set[1].map((phase, inx) => (
                    <span key={`phase-${index}-${inx}`}>
                      {getPhaseByIndex(inx).label}: {phase}
                    </span>
                  ))}
                </span>
                <button type="button" onClick={() => handlePresetClick(set[1])}>
                  Select
                </button>
              </section>
            ))}
          </fieldset>
          <fieldset>
            <legend>Custom</legend>
            {intervals.map((duration, index) => (
              <div key={index}>
                <label htmlFor={`phase-${index}`}>
                  {getPhaseByIndex(index).label}:
                </label>
                <input
                  id={`phase-${index}`}
                  type="number"
                  min={index % 2 === 0 ? 1 : 0}
                  max={12}
                  value={duration}
                  data-index={index}
                  onChange={handlePhaseChange}
                />
              </div>
            ))}
          </fieldset>
        </fieldset>
        <fieldset>
          <legend>Cycles</legend>
          <div>
            <label htmlFor="cycles">Number of Cycles:</label>
            <input
              id="cycles"
              type="number"
              min={1}
              max={50}
              value={cycles}
              onChange={handleCycleChange}
            />
          </div>
        </fieldset>
        <button type="submit">Begin</button>
      </form>
    </>
  );
};

export default PhaseSelection;
