import styled, { css } from 'styled-components';
import { Page } from '../../types';

type Props = {
  selected: Page;
  pages: Page[];
  onChange: (page: Page) => void;
};

const Root = styled.div`
  position: fixed;
  inset: auto 0 0;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  box-shadow:
    rgba(0 0 0 / 20%) 0 3px 3px -2px,
    rgba(0 0 0 / 14%) 0 3px 4px 0,
    rgba(0 0 0 / 12%) 0 1px 8px 0;
  background-color: ${({ theme }) => theme.colors.navigationBackground};
  color: ${({ theme }) => theme.colors.navigationText};

  @media (width >= 800px) {
    inset: 50px 0 auto;
  }

  @media (orientation: portrait) {
    padding-bottom: env(safe-area-inset-bottom);
  }
`;

const Item = styled.button<{ $isSelected: boolean }>`
  color: ${({ $isSelected, theme }) => ($isSelected ? theme.colors.navigationTextDark : 'inherit')};
  padding: 0;
  margin: 0;
  background-color: inherit;
  border: none;
  cursor: pointer;
  outline: inherit;
  width: 10rem;
  height: 56px;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;

  svg {
    height: 1.5rem;
    width: 1.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.padding.xs};
  }

  @media (width >= 800px) {
    flex-direction: row;

    span {
      margin-left: ${({ theme }) => theme.spacing.padding.m};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.navigationBackgroundDarker};
    }

    svg {
      margin-bottom: 0;
    }

    ${({ $isSelected }) =>
      $isSelected &&
      css`
        background-color: ${({ theme }) => theme.colors.navigationBackgroundDark};
      `}
  }
`;

const Navigation = ({ selected, pages, onChange }: Props) => {
  return (
    <Root>
      {pages.map((page) => (
        <Item
          key={page.title}
          $isSelected={selected.title === page.title}
          onClick={() => {
            onChange(page);
          }}
        >
          {page.icon}
          <span>{page.title}</span>
        </Item>
      ))}
    </Root>
  );
};

export default Navigation;
