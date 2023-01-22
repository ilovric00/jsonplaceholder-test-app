import React, { PropsWithChildren } from 'react';
import Header from 'components/Header';

import styles from './Layout.module.scss';

const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.container}>
    <Header />
    <main className={styles.main}>{children}</main>
  </div>
);

export default Layout;
