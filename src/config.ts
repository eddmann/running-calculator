import { Preset } from './types';

export const distancePresets: Preset[] = [
  {
    title: '5k',
    distance: { value: '5', unit: 'km' },
  },
  {
    title: '10k',
    distance: { value: '10', unit: 'km' },
  },
  {
    title: 'Half',
    distance: { value: '13.1', unit: 'miles' },
  },
  {
    title: 'Marathon',
    distance: { value: '26.2', unit: 'miles' },
  },
];
