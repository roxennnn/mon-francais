import { VolumeUp } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import type { NextPage } from 'next';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import { speakHandler } from '../utils/speaker';

const Home: NextPage = () => {
  const [text, setText] = useState<string>();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div
          style={{
            display: 'flex',
            flex: '1 1 0',
            marginBottom: '1rem',
          }}
        >
          <TextField
            label=""
            variant="outlined"
            placeholder="Tapez la phrase que vous voulez prononcer"
            rows={4}
            maxRows={6}
            multiline
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
            sx={{
              width: '100%',
            }}
          />
        </div>
        <Button
          variant="contained"
          endIcon={<VolumeUp />}
          onClick={() => {
            speakHandler(text, window);
          }}
          sx={{
            minWidth: '10rem',
            height: '2.5rem',
            borderRadius: '2rem',
          }}
        >
          Speak
        </Button>
      </main>
    </div>
  );
};

// export async function getServerSideProps() {
//   return {
//     redirect: {
//       destination: '/verbes',
//       permanent: false,
//     },
//   };
// }

export default Home;
