import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

const Header: React.FC = () => (
  <header className={styles.container}>
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        JSONPlaceholder App
      </NavLink>
    </nav>
  </header>
);

export default Header;
