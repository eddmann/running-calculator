import { useLayoutEffect, useState } from 'react';
import { Distance, Pace, Time } from '../types';
import Section from './Section';
import DistanceInput from './DistanceInput';
import PaceInput from './PaceInput';
import TimeInput from './TimeInput';
import styled from 'styled-components';
import { distancePresets } from '../config';
import { calcTime } from '../domain/calculator';

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

const TimeCalculator = () => {
  const [distance, setDistance] = useState<Distance>({
    value: '26.2',
    unit: 'miles',
  });
  const [pace, setPace] = useState<Pace>({
    value: {
      hours: '0',
      minutes: '8',
      seconds: '1',
    },
    unit: 'per/mile',
  });
  const [time, setTime] = useState<Time | null>(null);

  useLayoutEffect(() => {
    setTime(calcTime(distance, pace));
  }, [distance, pace]);

  return (
    <Section title="Calculator">
      <DistanceInput distance={distance} presets={distancePresets} onChange={setDistance} />
      <Divider>at</Divider>
      <PaceInput pace={pace} onChange={setPace} />
      {time && (
        <Result>
          <TimeInput time={time} />
        </Result>
      )}
    </Section>
  );
};

export default TimeCalculator;
