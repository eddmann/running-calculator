import { useState } from 'react';
import styled from 'styled-components';
import PaceConverter from '../PaceConverter';
import PaceCalculator from '../PaceCalculator';
import DistanceConverter from '../DistanceConverter';
import DistanceCalculator from '../DistanceCalculator';
import TimeCalculator from '../TimeCalculator';
import PaceIcon from '../../assets/pace.svg?react';
import DistanceIcon from '../../assets/distance.svg?react';
import TimeIcon from '../../assets/time.svg?react';
import Navigation from './Navigation';
import Header from './Header';
import { Page } from '../../types';
import PWAInstallBanner from '../PWAInstallBanner';

const Root = styled.div`
  padding: 5rem ${({ theme }) => theme.spacing.padding.m};

  @media (width >= 800px), (orientation: landscape) {
    padding: 9rem max(${({ theme }) => theme.spacing.padding.m}, env(safe-area-inset-right)) env(safe-area-inset-bottom)
      max(${({ theme }) => theme.spacing.padding.m}, env(safe-area-inset-left));
  }
`;

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.padding.xl};
  max-width: 1024px;
  margin: auto;
  justify-content: center;

  @media (width >= 800px), (orientation: landscape) {
    flex-direction: row;
  }
`;

const pages: Page[] = [
  {
    title: 'Pace',
    icon: <PaceIcon />,
    content: (
      <>
        <PaceConverter />
        <PaceCalculator />
      </>
    ),
  },
  {
    title: 'Distance',
    icon: <DistanceIcon />,
    content: (
      <>
        <DistanceConverter />
        <DistanceCalculator />
      </>
    ),
  },
  {
    title: 'Time',
    icon: <TimeIcon />,
    content: <TimeCalculator />,
  },
];

function App() {
  const [page, setPage] = useState<Page>(pages[0]);

  return (
    <Root>
      <Header title="Running Calculator" />
      <PageLayout>{page.content}</PageLayout>
      <Navigation selected={page} pages={pages} onChange={setPage} />
      <PWAInstallBanner />
    </Root>
  );
}

export default App;
