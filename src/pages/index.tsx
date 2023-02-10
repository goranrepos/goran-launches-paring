import styles from '../styles/Home.module.css';
import { GetServerSideProps } from 'next';
import { ILaunch } from '../../Types';
import SpaceXCard from '../components/SpaceXCard';

const querySpaceX = {
  query: {},
  options: {
    page: 1,
    limit: 10,
    select: {
      name: 1,
      date_utc: 1,
      ['links.patch.small']: 1,
      success: 1,
      failures: 1,
    },
    populate: [
      {
        path: 'cores.core',
        select: {
          serial: 1,
        },
      },
      {
        path: 'payloads',
        limit: 1,
        select: {
          type: 1,
        },
      },
    ],
  },
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v5/launches/query', {
      method: 'POST',
      body: JSON.stringify(querySpaceX),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = (await response.json()) as {
      docs: ILaunch[];
      hasNextPage: boolean;
      hasPrevPage: boolean;
      limit: number;
      nextPage: number | null;
      page: number;
      pagingCounter: number;
      prevPage: number | null;
      totalDocs: number;
      totalPages: number;
    };

    if (!response.ok) {
      throw new Error('failed to fetch from server');
    }

    return {
      props: {
        spacex: data.docs,
      },
    };
  } catch (e) {
    return { notFound: true };
  }
};

export default function Home({ spacex }: { spacex: ILaunch[] }) {
  return (
    <div>
      <h1>Spacex launches</h1>
      <div className={styles.container}>
        {spacex.map((obj) => {
          const { id, name, links, failures, success, cores, date_utc } = obj;
          const date = new Date(date_utc);
          const formattedDate = date.toLocaleDateString();
          const imgSrc = links.patch.small;
          return (
            <SpaceXCard {...{id, name, imgSrc , failures, success, cores, formattedDate}} key={id}/>
          );
        })}
      </div>
    </div>
  );
}
