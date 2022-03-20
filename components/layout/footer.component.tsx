import * as React from 'react';
import styles from '../../styles/Home.module.css';

interface Props {}

const FooterComponent = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/roxennnn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Fait avec plaisir par roxennnn
      </a>
    </footer>
  );
};

export default FooterComponent;
