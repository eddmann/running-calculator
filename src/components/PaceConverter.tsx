import { useState } from 'react';
import { Pace } from '../types';
import Section from './Section';
import TimeInput from './TimeInput';
import styled from 'styled-components';
import { paceInKm, paceInMiles } from '../domain/calculator';

const Entry = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.padding.m};
`;

const Unit = styled.span`
  width: 12rem;
  font-size: ${({ theme }) => theme.typography.size.s};
`;

const Divider = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.padding.s} 0;
  font-size: ${({ theme }) => theme.typography.size.l};
  color: ${({ theme }) => theme.colors.sectionTextLight};
`;

const PaceConverter = () => {
  const [km, setKm] = useState<Pace>({
    value: { hours: '0', minutes: '4', seconds: '40' },
    unit: 'per/km',
  });
  const [miles, setMiles] = useState<Pace>({
    value: { hours: '0', minutes: '7', seconds: '30' },
    unit: 'per/mile',
  });

  const handleChange = (pace: Pace) => {
    setKm(paceInKm(pace));
    setMiles(paceInMiles(pace));
  };

  return (
    <Section title="Converter">
      <Entry>
        <TimeInput
          time={km.value}
          onChange={(value) => {
            handleChange({ ...km, value });
          }}
        />
        <Unit>per/km</Unit>
      </Entry>
      <Divider>=</Divider>
      <Entry>
        <TimeInput
          time={miles.value}
          onChange={(value) => {
            handleChange({ ...miles, value });
          }}
        />
        <Unit>per/mile</Unit>
      </Entry>
    </Section>
  );
};

export default PaceConverter;
