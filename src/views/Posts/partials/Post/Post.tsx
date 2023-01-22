import React from 'react';
import PostType from 'types/post';

import CommentList from './CommentList';
import UserFullName from './UserFullName';

import styles from './Post.module.scss';

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => (
  <article className={styles.container}>
    <UserFullName userId={post.userId} />
    <h2>{post.title}</h2>
    <CommentList postId={post.id} />
  </article>
);

export default Post;
