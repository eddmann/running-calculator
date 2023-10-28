import { ReactNode } from 'react';

export const distanceUnits = ['miles', 'km'] as const;

export type DistanceUnit = (typeof distanceUnits)[number];

export type Distance = {
  value: string;
  unit: DistanceUnit;
};

export const paceUnits = ['per/mile', 'per/km'] as const;

export type PaceUnit = (typeof paceUnits)[number];

export type Pace = {
  value: Time;
  unit: PaceUnit;
};

export type Time = {
  hours: string;
  minutes: string;
  seconds: string;
};

export type Preset = {
  title: string;
  distance: Distance;
};

export type Page = {
  title: string;
  icon: ReactNode;
  content: ReactNode;
};
