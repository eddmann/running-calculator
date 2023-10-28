import styled from 'styled-components';

const SelectField = styled.select`
  color: inherit;
  background-color: inherit;
  border: 2px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: ${({ theme }) => theme.spacing.borderRadius.m};
  display: inline-block;
  font: inherit;
  line-height: 1.5em;
  padding: ${({ theme }) => theme.spacing.padding.xs} ${({ theme }) => theme.spacing.padding.xl}
    ${({ theme }) => theme.spacing.padding.xs} ${({ theme }) => theme.spacing.padding.s};
  margin: 0;
  font-size: ${({ theme }) => theme.typography.size.s};
  outline: none;
  box-sizing: border-box;
  appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, ${({ theme }) => theme.colors.inputBorder} 50%),
    linear-gradient(135deg, ${({ theme }) => theme.colors.inputBorder} 50%, transparent 50%),
    linear-gradient(to right, ${({ theme }) => theme.colors.inputBorder}, ${({ theme }) => theme.colors.inputBorder});
  background-position:
    calc(100% - 12px) calc(1em - 2px),
    calc(100% - 7px) calc(1em - 2px),
    calc(100% - 1.6em) 0.25em;
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
  background-repeat: no-repeat;
`;

export default SelectField;
