import React from 'react';
import clsx from 'clsx';

import styles from './Typography.module.scss';

type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'subtitle3'
  | 'subtitle4'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4'
  | 'label1'
  | 'label2'
  | 'label3'
  | 'button1'
  | 'button2'
  | 'button3';

type VariantMapping = {
  [typographyVariant in TypographyVariant]: keyof JSX.IntrinsicElements;
};

const variantMapping: VariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  subtitle3: 'h6',
  subtitle4: 'h6',
  body1: 'p',
  body2: 'p',
  body3: 'p',
  body4: 'p',
  label1: 'span',
  label2: 'span',
  label3: 'span',
  button1: 'div',
  button2: 'div',
  button3: 'div',
};

// eslint-disable-next-line no-undef
interface TypographyProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  className?: string;
  variant?: TypographyVariant;
  component?: keyof JSX.IntrinsicElements;
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  component: Component,
  className,
  children,
  ...rest
}) => {
  const Tag = Component || variantMapping[variant];

  return (
    <Tag className={clsx(styles.typography, styles[variant], className)} {...rest}>
      {children}
    </Tag>
  );
};

export default Typography;
