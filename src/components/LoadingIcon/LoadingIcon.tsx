import React from 'react';
import cx from 'clsx';

import styles from './LoadingIcon.module.scss';

interface LoadingIconProps {
  className?: string;
}

const LoadingIcon: React.FC<LoadingIconProps> = ({ className }) => (
  <div data-testid="loading-icon" className={cx(styles.container, className)} />
);

export default LoadingIcon;
