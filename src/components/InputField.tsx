import styled from 'styled-components';
import { useBodyLock } from '../hooks/useBodyLock';

const Input = styled.input`
  font-size: ${({ theme }) => theme.typography.size.l};
  text-align: center;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.inputBorder};
  width: 100%;
  outline: none;
  border-radius: 0;
  padding: ${({ theme }) => theme.spacing.padding.xs} 0;
  letter-spacing: 0.05em;
  transition: background 250ms;

  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.colors.inputBorderDark};
    background-color: ${({ theme }) => theme.colors.inputBackgroundDark};
  }
`;

const InputField = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  const { lock, unlock } = useBodyLock();

  return (
    <Input
      {...props}
      onFocus={(e) => {
        lock();
        props.onFocus?.(e);
      }}
      onBlur={(e) => {
        unlock();
        props.onBlur?.(e);
      }}
    />
  );
};

export default InputField;
