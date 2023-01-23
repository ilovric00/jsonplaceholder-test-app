import React from 'react';
import Logo from 'components/SvgIcons/Logo';
import Typography from 'components/Typography';
import withLogger from 'utils/hoc/withLogger';

import { Link } from 'react-router-dom';

import styles from './Home.module.scss';

const Home: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <Logo className={styles.logo} />
      <Typography variant="h1" className={styles.heading}>
        React Test Assignement
      </Typography>
      <Link to="/posts" className={styles.link}>
        Go to task
      </Link>
    </div>
  </div>
);

export default withLogger(Home);
