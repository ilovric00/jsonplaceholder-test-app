import React from 'react';
import Logo from 'components/SvgIcons/Logo';

import styles from './Home.module.scss';

const Home: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <Logo className={styles.logo} />
      <h1 className={styles.heading}>React Test Assignement</h1>
      <a className={styles.link} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Go to task
      </a>
    </div>
  </div>
);

export default Home;
