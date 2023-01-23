import React from 'react';
import Typography from 'components/Typography';
import PostType from 'types/post';
import withLogger from 'utils/hoc/withLogger';

import CommentList from './CommentList';
import UserFullName from './UserFullName';

import styles from './Post.module.scss';

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => (
  <article data-testid={`post-${post.id}`} className={styles.container}>
    <UserFullName userId={post.userId} />
    <Typography component="h2" variant="h3">
      {post.title}
    </Typography>
    <Typography variant="body2" className={styles.body}>
      {post.body}
    </Typography>
    <CommentList postId={post.id} />
  </article>
);

export default withLogger(Post);
