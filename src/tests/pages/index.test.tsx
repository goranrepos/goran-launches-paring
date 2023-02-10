import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../pages';
import { spacexData } from './mockHome';
import { getServerSideProps } from '../../pages/index';
import { GetServerSidePropsContext } from 'next';
import fetch from 'jest-fetch-mock';
import SpaceXCard, { ISPaceXCard } from '../../components/SpaceXCard';

describe('Home page', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('Should display main heading', () => {
    render(<Home spacex={spacexData} />);
    expect(screen.queryByText('Spacex launches')).not.toBeNull();
  });

  it('Should display 11 headings', () => {
    render(<Home spacex={spacexData} />);
    const heading = screen.getAllByRole('heading');
    expect(heading.length).toBe(11);
  });

  it('should call spacex api and receive data', async () => {
    fetch.mockResponseOnce(JSON.stringify({ docs: spacexData }));

    const response = await getServerSideProps({} as GetServerSidePropsContext);
    expect(response).toEqual(
      expect.objectContaining({
        props: {
          spacex: spacexData,
        },
      })
    );
  });

  it('render spacexcard', () => {
    const mockCardData: ISPaceXCard = {
      id: '5eb0e4b5b6c3bb0006eeb1e1',
      name: 'FalconSat',
      formattedDate: '29/09/2008',
      imgSrc: 'https://images2.imgbox.com/94/f2/NN6Ph45r_o.png',
      success: true,
      failures: [
        {
          altitude: null,
          reason: 'merlin engine failure',
          time: 33,
        },
      ],
      cores: [
        {
          core: {
            id: '5e9e289df35918033d3b2623',
            serial: 'Merlin1A',
          },
        },
      ],
    };

    render(<SpaceXCard {...{ ...mockCardData }} />);
    const heading = screen.getAllByRole('heading');
    expect(heading.length).toBe(1);
  });
});
