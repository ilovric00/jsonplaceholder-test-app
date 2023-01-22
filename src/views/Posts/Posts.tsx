import React, { useEffect, useMemo, useState } from 'react';
import Layout from 'components/Layout';
import PostType from 'types/post';
import User from 'types/user';
import JSONPlaceholderService from 'services/JSONPlaceholderService';

import { UsersContextProvider } from 'utils/context/UsersContext';

import SearchInput from './partials/SearchInput';
import Post from './partials/Post';

const Posts: React.FC = () => {
  const [users, setUsers] = useState<User[] | null>([]);
  const [posts, setPosts] = useState<PostType[] | null>([]);
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
      <UsersContextProvider value={{ users }}>
        {filteredPosts?.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </UsersContextProvider>
    </Layout>
  );
};

export default Posts;
