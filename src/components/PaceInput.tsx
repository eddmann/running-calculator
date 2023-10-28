import styled from 'styled-components';
import SelectField from './SelectField';
import { Pace, PaceUnit, paceUnits } from '../types';
import TimeInput from './TimeInput';

const Root = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.padding.m};
`;

type Props = {
  pace: Pace;
  onChange?: (pace: Pace) => void;
};

const PaceInput = ({ pace, onChange }: Props) => {
  if (!onChange) {
    return (
      <span>
        <TimeInput time={pace.value} /> <span>{pace.unit}</span>
      </span>
    );
  }

  return (
    <Root>
      <TimeInput
        time={pace.value}
        onChange={(value) => {
          onChange({ ...pace, value });
        }}
      />
      <SelectField
        value={pace.unit}
        onChange={(event) => {
          onChange({ ...pace, unit: event.currentTarget.value as PaceUnit });
        }}
      >
        {paceUnits.map((unit) => (
          <option key={unit} value={unit}>
            {unit}
          </option>
        ))}
      </SelectField>
    </Root>
  );
};

export default PaceInput;
