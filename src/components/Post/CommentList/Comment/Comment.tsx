import React from 'react';
import withLogger from 'utils/hoc/withLogger';

import styles from './Comment.module.scss';

interface CommentProps {
  id: number;
  name: string;
}

const Comment: React.FC<CommentProps> = ({ id, name }) => (
  <li data-testid={`comment-${id}`} className={styles.container}>
    {name}
  </li>
);

export default withLogger(Comment);
