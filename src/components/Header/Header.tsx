import React from 'react';
import withLogger from 'utils/hoc/withLogger';

import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

const Header: React.FC = () => (
  <header data-testid="header" className={styles.container}>
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        JSONPlaceholder App
      </NavLink>
    </nav>
  </header>
);

export default withLogger(Header);
