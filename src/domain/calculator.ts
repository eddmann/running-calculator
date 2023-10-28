import { Distance, Pace, Time } from '../types';

const KM_IN_MILE = 1.60934;
const MILE_IN_KM = 0.621371;

const timeToSeconds = (time: Time): number =>
  [time.hours, time.minutes, time.seconds].reduce((acc: number, segment: string) => 60 * acc + +segment, 0);

const secondsToTime = (seconds: number): Time => {
  return {
    hours: '' + Math.floor(seconds / 3600),
    minutes: '' + Math.floor((seconds % 3600) / 60),
    seconds: '' + Math.round(seconds % 60),
  };
};

export const paceInMiles = (pace: Pace): Pace => {
  if (pace.unit === 'per/mile') {
    return pace;
  }

  return {
    value: secondsToTime(timeToSeconds(pace.value) * KM_IN_MILE),
    unit: 'per/mile',
  };
};

export const paceInKm = (pace: Pace): Pace => {
  if (pace.unit === 'per/km') {
    return pace;
  }

  return {
    value: secondsToTime(timeToSeconds(pace.value) / KM_IN_MILE),
    unit: 'per/km',
  };
};

const isInvalid = (n: number) => n === 0 || n === Infinity || isNaN(n);

export const calcPaceInMiles = (distance: Distance, time: Time): Pace | null => {
  const pace =
    distance.unit === 'miles'
      ? timeToSeconds(time) / +distance.value
      : timeToSeconds(time) / (+distance.value * KM_IN_MILE);

  if (isInvalid(pace)) {
    return null;
  }

  return {
    value: secondsToTime(pace),
    unit: 'per/mile',
  };
};

export const calcPaceInKm = (distance: Distance, time: Time): Pace | null => {
  const pace =
    distance.unit === 'km'
      ? timeToSeconds(time) / +distance.value
      : timeToSeconds(time) / (+distance.value / MILE_IN_KM);

  if (isInvalid(pace)) {
    return null;
  }

  return {
    value: secondsToTime(pace),
    unit: 'per/km',
  };
};

export const distanceInMiles = (distance: Distance): Distance => {
  if (distance.unit === 'miles') {
    return distance;
  }

  return {
    value: '' + +(+distance.value * MILE_IN_KM).toFixed(3),
    unit: 'miles',
  };
};

export const distanceInKm = (distance: Distance): Distance => {
  if (distance.unit === 'km') {
    return distance;
  }

  return {
    value: '' + +(+distance.value * KM_IN_MILE).toFixed(3),
    unit: 'km',
  };
};

export const calcDistanceInMiles = (pace: Pace, time: Time): Distance | null => {
  const distance =
    pace.unit === 'per/mile'
      ? timeToSeconds(time) / timeToSeconds(pace.value)
      : timeToSeconds(time) / (timeToSeconds(pace.value) / KM_IN_MILE);

  if (isInvalid(distance)) {
    return null;
  }

  return {
    value: '' + +distance.toFixed(2),
    unit: 'miles',
  };
};

export const calcDistanceInKm = (pace: Pace, time: Time): Distance | null => {
  const distance =
    pace.unit === 'per/km'
      ? timeToSeconds(time) / timeToSeconds(pace.value)
      : timeToSeconds(time) / (timeToSeconds(pace.value) * MILE_IN_KM);

  if (isInvalid(distance)) {
    return null;
  }

  return {
    value: '' + +distance.toFixed(2),
    unit: 'km',
  };
};

export const calcTime = (distance: Distance, pace: Pace): Time | null => {
  let time: number;

  if (distance.unit === 'km' && pace.unit === 'per/km') {
    time = timeToSeconds(pace.value) * +distance.value;
  } else if (distance.unit === 'miles' && pace.unit === 'per/mile') {
    time = timeToSeconds(pace.value) * +distance.value;
  } else if (distance.unit === 'miles' && pace.unit === 'per/km') {
    time = timeToSeconds(pace.value) * +distance.value * KM_IN_MILE;
  } else {
    time = timeToSeconds(pace.value) * +distance.value * MILE_IN_KM;
  }

  return isInvalid(time) ? null : secondsToTime(time);
};
