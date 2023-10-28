import { useLayoutEffect, useState } from 'react';
import { Distance, Pace, Time } from '../types';
import Section from './Section';
import DistanceInput from './DistanceInput';
import styled from 'styled-components';
import TimeInput from './TimeInput';
import PaceInput from './PaceInput';
import { distancePresets } from '../config';
import { calcPaceInKm, calcPaceInMiles } from '../domain/calculator';

const Divider = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.padding.m} 0;
  font-size: ${({ theme }) => theme.typography.size.m};
  color: ${({ theme }) => theme.colors.sectionTextLight};
`;

const Result = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.padding.m};
  font-size: ${({ theme }) => theme.typography.size.l};
  padding: ${({ theme }) => theme.spacing.padding.xl} 0 0 0;
  justify-content: center;
`;

const PaceCalculator = () => {
  const [distance, setDistance] = useState<Distance>({
    value: '26.2',
    unit: 'miles',
  });
  const [time, setTime] = useState<Time>({
    hours: '3',
    minutes: '30',
    seconds: '0',
  });
  const [pace, setPace] = useState<{
    km: Pace;
    miles: Pace;
  } | null>(null);

  useLayoutEffect(() => {
    const km = calcPaceInKm(distance, time);
    const miles = calcPaceInMiles(distance, time);
    setPace(km && miles ? { km, miles } : null);
  }, [distance, time]);

  return (
    <Section title="Calculator">
      <DistanceInput distance={distance} presets={distancePresets} onChange={setDistance} />
      <Divider>in</Divider>
      <TimeInput time={time} onChange={setTime} />
      {pace && (
        <Result>
          <PaceInput pace={pace.km} />
          <PaceInput pace={pace.miles} />
        </Result>
      )}
    </Section>
  );
};

export default PaceCalculator;
