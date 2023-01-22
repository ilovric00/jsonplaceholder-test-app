import React, { useEffect, useMemo, useState } from 'react';
import Layout from 'components/Layout';
import Post from 'types/post';
import User from 'types/user';
import JSONPlaceholderService from 'services/JSONPlaceholderService';

import SearchInput from './partials/SearchInput';
import UserFullName from './partials/UserFullName';
import CommentList from './partials/CommentList';

const Posts: React.FC = () => {
  const [users, setUsers] = useState<User[] | null>([]);
  const [posts, setPosts] = useState<Post[] | null>([]);
  const [searchInput, setSearchInput] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await JSONPlaceholderService.getPosts({ start: 0, limit: 10 });

      setPosts(response);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await JSONPlaceholderService.getUsers();

      setUsers(response);
    };

    fetchData();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const filteredPosts = useMemo(
    () => posts?.filter(post => post.title.toLowerCase().includes(searchInput.toLowerCase())),
    [posts, searchInput]
  );

  return (
    <Layout>
      <SearchInput onChange={handleChange} />
      {filteredPosts?.map(post => (
        <article key={post.id}>
          <UserFullName users={users} userId={post.userId} />
          <h2>{post.title}</h2>
          <CommentList postId={post.id} />
        </article>
      ))}
    </Layout>
  );
};

export default Posts;
