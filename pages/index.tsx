import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}></main>
    </div>
  );
};

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/verbes',
      permanent: false,
    },
  };
}

export default Home;
