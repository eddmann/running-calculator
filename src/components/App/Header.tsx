import styled from 'styled-components';
import LogoIcon from '../../assets/logo.svg?react';

const Root = styled.div`
  position: fixed;
  display: flex;
  inset: 0 0 auto;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  color: ${({ theme }) => theme.colors.headerText};
`;

const Title = styled.h1`
  padding: 0;
  margin: 0;
  font-size: ${({ theme }) => theme.typography.size.l};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  display: flex;
  align-items: center;

  svg {
    margin-right: ${({ theme }) => theme.spacing.padding.xs};
    height: 1rem;
  }
`;

const Header = ({ title }: { title: string }) => (
  <Root>
    <Title>
      <LogoIcon />
      {title}
    </Title>
  </Root>
);

export default Header;
