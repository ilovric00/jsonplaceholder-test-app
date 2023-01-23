import React, { PropsWithChildren } from 'react';
import Header from 'components/Header';
import withLogger from 'utils/hoc/withLogger';

import styles from './Layout.module.scss';

const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <div data-testid="layout" className={styles.container}>
    <Header />
    <main className={styles.main}>{children}</main>
  </div>
);

export default withLogger(Layout);
