import React from 'react';
import clsx from 'clsx';

import styles from './Button.module.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  startIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  fullWidth = false,
  onClick = undefined,
  size = 'medium',
  startIcon: StartIcon,
  ...rest
}) => (
  <button
    type="button"
    className={clsx(styles.button, styles[size], { [styles.fullWidth]: fullWidth }, className)}
    onClick={onClick}
    {...rest}
  >
    {StartIcon || null}
    {children}
  </button>
);

export default Button;
