import { useState } from 'react';
import Section from './Section';
import InputField from './InputField';
import styled from 'styled-components';
import { distanceInKm, distanceInMiles } from '../domain/calculator';
import { Distance } from '../types';

const Entry = styled.div`
  display: flex;
  align-items: center;
`;

const Unit = styled.span`
  width: 3rem;
  margin-left: ${({ theme }) => theme.spacing.padding.m};
  font-size: ${({ theme }) => theme.typography.size.s};
`;

const Divider = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.padding.s} 0;
  font-size: ${({ theme }) => theme.typography.size.l};
  color: ${({ theme }) => theme.colors.sectionTextLight};
`;

const DistanceConverter = () => {
  const [km, setKm] = useState<Distance>({ value: '42.165', unit: 'km' });
  const [miles, setMiles] = useState<Distance>({
    value: '26.2',
    unit: 'miles',
  });

  const handleChange = (distance: Distance) => {
    if (distance.value === '') {
      setKm({ ...km, value: '' });
      setMiles({ ...miles, value: '' });
      return;
    }

    if (!distance.value.match(/^(0|[1-9]\d*)\.?[0-9]*$/)) {
      return;
    }

    setKm(distanceInKm(distance));
    setMiles(distanceInMiles(distance));
  };

  return (
    <Section title="Converter">
      <Entry>
        <InputField
          type="text"
          inputMode="decimal"
          value={km.value}
          onChange={(event) => {
            handleChange({ ...km, value: event.currentTarget.value });
          }}
        />
        <Unit>km</Unit>
      </Entry>
      <Divider>=</Divider>
      <Entry>
        <InputField
          type="text"
          inputMode="decimal"
          value={miles.value}
          onChange={(event) => {
            handleChange({ ...miles, value: event.currentTarget.value });
          }}
        />
        <Unit>miles</Unit>
      </Entry>
    </Section>
  );
};

export default DistanceConverter;
