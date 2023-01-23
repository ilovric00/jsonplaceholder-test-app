import React, { useEffect, useState } from 'react';
import Button from 'components/Button';
import Layout from 'components/Layout';
import Post from 'components/Post';
import PostType from 'types/post';
import JSONPlaceholderService from 'services/JSONPlaceholderService';
import withLogger from 'utils/hoc/withLogger';

import { Link, useParams } from 'react-router-dom';

const SinglePost: React.FC = () => {
  const [post, setPost] = useState<PostType | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const response = await JSONPlaceholderService.getSinglePost({ postId: id as string });

      setPost(response);
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return null;
  }

  return (
    <Layout>
      <Post post={post} />
      <Link to="/posts">
        <Button size="small">Go back</Button>
      </Link>
    </Layout>
  );
};

export default withLogger(SinglePost);
