import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  flex: 1;

  @media (width >= 800px) {
    max-width: 492px;
  }
`;

const Title = styled.h2`
  margin: 0 0 ${({ theme }) => theme.spacing.padding.m} ${({ theme }) => theme.spacing.padding.m};
  font-size: ${({ theme }) => theme.typography.size.l};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

const Content = styled.div`
  padding: ${({ theme }) => theme.spacing.padding.m};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  background-color: ${({ theme }) => theme.colors.sectionBackground};
  color: ${({ theme }) => theme.colors.sectionText};
  box-shadow: 0 10px 15px -3px ${({ theme }) => theme.colors.inputBorder};
  border-radius: ${({ theme }) => theme.spacing.borderRadius.l};
`;

const Section = ({ title, children }: PropsWithChildren<{ title: string }>) => {
  return (
    <Root>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Root>
  );
};

export default Section;
