interface IPhaseLabel {
  label: string;
  className: string;
}

export const PHASES = {
  INHALE: "INHALE",
  I_HOLD: "I_HOLD",
  EXHALE: "EXHALE",
  E_HOLD: "E_HOLD",
};

const phaseOrder = [PHASES.INHALE, PHASES.I_HOLD, PHASES.EXHALE, PHASES.E_HOLD];

const phaseLabels: Record<string, IPhaseLabel> = {
  [PHASES.INHALE]: {
    label: "Inhale",
    className: "inhale",
  },
  [PHASES.I_HOLD]: {
    label: "Hold",
    className: "inhale-hold",
  },
  [PHASES.EXHALE]: {
    label: "Exhale",
    className: "exhale",
  },
  [PHASES.E_HOLD]: {
    label: "Rest",
    className: "exhale-hold",
  },
};

export const getPhaseByIndex = (index: number): IPhaseLabel =>
  phaseLabels[phaseOrder[index]];

export const getPhaseByLabel = (phase: keyof typeof phaseLabels): IPhaseLabel =>
  phaseLabels[phase];
