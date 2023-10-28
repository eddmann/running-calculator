import styled from 'styled-components';
import InputField from './InputField';
import { Time } from '../types';

const Root = styled.div`
  display: flex;
  align-items: center;
`;

const StyledInputField = styled(InputField)`
  margin: 0 ${({ theme }) => theme.spacing.padding.s} 0 ${({ theme }) => theme.spacing.padding.m};

  &:first-child {
    margin-left: 0;
  }
`;

const SegmentLabel = styled.span`
  color: ${({ theme }) => theme.colors.sectionTextLight};
  font-size: ${({ theme }) => theme.typography.size.s};
`;

const ReadOnlyView = styled.span`
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

type Props = {
  time: Time;
  onChange?: (time: Time) => void;
};

const ReadOnlyTimeInput = ({ time }: { time: Time }) => {
  let output = '';

  if (time.hours !== '0') {
    output += time.hours.padStart(2, '0') + ':';
  }

  if (time.hours !== '0' || time.minutes !== '0' || time.seconds !== '0') {
    output += time.minutes.padStart(2, '0') + ':';
  }

  output += time.seconds.padStart(2, '0');

  return <ReadOnlyView>{output}</ReadOnlyView>;
};

const TimeInput = ({ time, onChange }: Props) => {
  if (!onChange) {
    return <ReadOnlyTimeInput time={time} />;
  }

  const handleChange = (key: keyof Time) => (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.value === '') {
      onChange({ ...time, [key]: '' });
      return;
    }

    if (!event.currentTarget.value.match(/^[0-9]+$/)) {
      return;
    }

    if (key !== 'hours' && parseInt(event.currentTarget.value) >= 60) {
      return;
    }

    onChange({ ...time, [key]: event.currentTarget.value });
  };

  const handleBlur = (key: keyof Time) => () => {
    if (time[key] === '') {
      onChange({ ...time, [key]: '0' });
    }
  };

  return (
    <Root>
      <StyledInputField
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        value={time.hours}
        onChange={handleChange('hours')}
        onBlur={handleBlur('hours')}
      />
      <SegmentLabel>h</SegmentLabel>
      <StyledInputField
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        value={time.minutes}
        onChange={handleChange('minutes')}
        onBlur={handleBlur('minutes')}
      />
      <SegmentLabel>m</SegmentLabel>
      <StyledInputField
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        value={time.seconds}
        onChange={handleChange('seconds')}
        onBlur={handleBlur('seconds')}
      />
      <SegmentLabel>s</SegmentLabel>
    </Root>
  );
};

export default TimeInput;
