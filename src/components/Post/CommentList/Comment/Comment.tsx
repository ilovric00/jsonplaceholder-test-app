import React from 'react';
import withLogger from 'utils/hoc/withLogger';

import styles from './Comment.module.scss';

interface CommentProps {
  name: string;
}

const Comment: React.FC<CommentProps> = ({ name }) => <li className={styles.container}>{name}</li>;

export default withLogger(Comment);
