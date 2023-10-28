import { useLayoutEffect, useState } from 'react';
import { Distance, Pace, Time } from '../types';
import styled from 'styled-components';
import Section from './Section';
import PaceInput from './PaceInput';
import TimeInput from './TimeInput';
import DistanceInput from './DistanceInput';
import { calcDistanceInKm, calcDistanceInMiles } from '../domain/calculator';

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

const DistanceCalculator = () => {
  const [pace, setPace] = useState<Pace>({
    value: {
      hours: '0',
      minutes: '8',
      seconds: '1',
    },
    unit: 'per/mile',
  });
  const [time, setTime] = useState<Time>({
    hours: '3',
    minutes: '30',
    seconds: '0',
  });
  const [distance, setDistance] = useState<{
    km: Distance;
    miles: Distance;
  } | null>(null);

  useLayoutEffect(() => {
    const km = calcDistanceInKm(pace, time);
    const miles = calcDistanceInMiles(pace, time);
    setDistance(km && miles ? { km, miles } : null);
  }, [pace, time]);

  return (
    <Section title="Calculator">
      <PaceInput pace={pace} onChange={setPace} />
      <Divider>for</Divider>
      <TimeInput time={time} onChange={setTime} />
      {distance && (
        <Result>
          <DistanceInput distance={distance.km} />
          <DistanceInput distance={distance.miles} />
        </Result>
      )}
    </Section>
  );
};

export default DistanceCalculator;
