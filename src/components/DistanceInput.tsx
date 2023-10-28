import styled from 'styled-components';
import InputField from './InputField';
import SelectField from './SelectField';
import { Distance, DistanceUnit, Preset, distanceUnits } from '../types';

const InputRoot = styled.div`
  display: flex;
  align-items: center;
`;

const PresetRoot = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${({ theme }) => theme.spacing.padding.m};
  gap: ${({ theme }) => theme.spacing.padding.xs};
`;

const PresetButton = styled.button<{ $isSelected: boolean }>`
  flex: 1;
  color: inherit;
  margin: 0;
  background-color: ${({ $isSelected, theme }) => ($isSelected ? theme.colors.inputBackgroundDark : 'inherit')};
  border: 2px solid ${({ theme }) => theme.colors.inputBorder};
  padding: ${({ theme }) => theme.spacing.padding.xs} 0;
  border-radius: ${({ theme }) => theme.spacing.borderRadius.m};
  cursor: pointer;
  outline: inherit;
  display: inline-flex;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
`;

const ReadOnlyView = styled.span`
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};

  span {
    font-weight: ${({ theme }) => theme.typography.weight.regular};
  }
`;

const StyledInputField = styled(InputField)`
  margin: 0 ${({ theme }) => theme.spacing.padding.m} 0 0;
`;

type Props = {
  distance: Distance;
  presets?: Preset[];
  onChange?: (distance: Distance) => void;
};

const DistanceInput = ({ distance, presets = [], onChange }: Props) => {
  if (!onChange) {
    return (
      <ReadOnlyView>
        {distance.value} <span>{distance.unit}</span>
      </ReadOnlyView>
    );
  }

  const handleValueChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.currentTarget.value === '') {
      onChange({ ...distance, value: '' });
      return;
    }

    if (!event.currentTarget.value.match(/^[0-9.]+$/)) {
      return;
    }

    onChange({
      ...distance,
      value: event.currentTarget.value,
    });
  };

  return (
    <>
      <InputRoot>
        <StyledInputField type="text" inputMode="decimal" value={distance.value} onChange={handleValueChange} />
        <SelectField
          value={distance.unit}
          onChange={(event) => {
            onChange({
              ...distance,
              unit: event.currentTarget.value as DistanceUnit,
            });
          }}
        >
          {distanceUnits.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </SelectField>
      </InputRoot>
      <PresetRoot>
        {presets.map((preset) => (
          <PresetButton
            key={preset.title}
            $isSelected={distance.value === preset.distance.value && distance.unit === preset.distance.unit}
            onClick={() => {
              onChange(preset.distance);
            }}
          >
            {preset.title}
          </PresetButton>
        ))}
      </PresetRoot>
    </>
  );
};

export default DistanceInput;
