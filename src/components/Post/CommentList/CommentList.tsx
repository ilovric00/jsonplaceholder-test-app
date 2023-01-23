import React, { lazy, Suspense, useEffect, useState } from 'react';
import LoadingIcon from 'components/LoadingIcon';
import JSONPlaceholderService from 'services/JSONPlaceholderService';
import CommentType from 'types/comment';
import withLogger from 'utils/hoc/withLogger';

import styles from './CommentList.module.scss';

const Comment = lazy(() => import('./Comment'));

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
        <Suspense key={comment.id} fallback={<LoadingIcon />}>
          <Comment id={comment.id} name={comment.name} />
        </Suspense>
      ))}
    </ul>
  );
};

export default withLogger(CommentList);
