import React, { useEffect, useMemo, useState } from 'react';
import Layout from 'components/Layout';
import PostType from 'types/post';
import User from 'types/user';
import JSONPlaceholderService from 'services/JSONPlaceholderService';

import { UsersContextProvider } from 'utils/context/UsersContext';
import { INITIAL_PAGE_NUMBER, INITIAL_PAGE_SIZE, MAX_COUNT } from 'config/constants';

import SearchInput from './partials/SearchInput';
import Post from './partials/Post';
import LoadMoreButton from './partials/LoadMoreButton';

const Posts: React.FC = () => {
  const [users, setUsers] = useState<User[] | null>([]);
  const [posts, setPosts] = useState<PostType[] | null>([]);
  const [searchInput, setSearchInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(INITIAL_PAGE_NUMBER);

  useEffect(() => {
    setLoading(true);

    const fetchPosts = async () => {
      const response = await JSONPlaceholderService.getPosts({
        start: pageNumber * INITIAL_PAGE_SIZE,
        limit: INITIAL_PAGE_SIZE,
      });

      setPosts(p => [...(p || []), ...(response || [])]);
      setLoading(false);
    };

    fetchPosts();
  }, [pageNumber]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await JSONPlaceholderService.getUsers();

      setUsers(response);
    };

    fetchUsers();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const filteredPosts = useMemo(
    () => posts?.filter(post => post.title.toLowerCase().includes(searchInput.toLowerCase())),
    [posts, searchInput]
  );

  const handleLoadMore = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <Layout>
      <SearchInput onChange={handleChange} />
      <UsersContextProvider value={{ users }}>
        {filteredPosts?.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </UsersContextProvider>
      <LoadMoreButton
        loading={loading}
        visibility={Boolean(posts && posts?.length < MAX_COUNT)}
        onClick={handleLoadMore}
      />
    </Layout>
  );
};

export default Posts;
