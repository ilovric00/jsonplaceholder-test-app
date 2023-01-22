import React, { useEffect, useState } from 'react';
import JSONPlaceholderService from 'services/JSONPlaceholderService';
import CommentType from 'types/comment';

import Comment from './Comment';

import styles from './CommentList.module.scss';

interface CommentListProps {
  postId: number;
}

const CommentList: React.FC<CommentListProps> = ({ postId }) => {
  const [comments, setComments] = useState<CommentType[] | null>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await JSONPlaceholderService.getPostComments({ postId });

      setComments(response);
    };

    fetchData();
  }, [postId]);

  return (
    <ul className={styles.container}>
      {comments?.map(comment => (
        <Comment key={comment.id} name={comment.name} />
      ))}
    </ul>
  );
};

export default CommentList;
