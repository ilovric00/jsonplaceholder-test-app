import React, { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import Layout from 'components/Layout';
import LoadingIcon from 'components/LoadingIcon';
import Typography from 'components/Typography';
import PostType from 'types/post';
import JSONPlaceholderService from 'services/JSONPlaceholderService';
import withLogger from 'utils/hoc/withLogger';
import useDebounce from 'utils/hooks/useDebounce';

import { Link } from 'react-router-dom';
import { INITIAL_PAGE_NUMBER, INITIAL_PAGE_SIZE, MAX_COUNT } from 'config/constants';

import SearchInput from './partials/SearchInput';
import LoadMoreButton from './partials/LoadMoreButton';

const Post = lazy(() => import('components/Post'));

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostType[] | null>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(INITIAL_PAGE_NUMBER);
  const [searchInput, setSearchInput] = useState<string>('');
  const debouncedSearchInput = useDebounce<string>(searchInput, 500);

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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const filteredPosts = useMemo(
    () => posts?.filter(post => post.title.toLowerCase().includes(debouncedSearchInput.toLowerCase())),
    [posts, debouncedSearchInput]
  );

  const handleLoadMore = () => {
    setSearchInput('');
    setPageNumber(prev => prev + 1);
  };

  if (!filteredPosts?.length) {
    return (
      <Layout>
        <SearchInput searchInput={searchInput} onChange={handleInputChange} />
        <Typography component="p" variant="h3">
          No results!
        </Typography>
      </Layout>
    );
  }

  return (
    <Layout>
      <SearchInput searchInput={searchInput} onChange={handleInputChange} />
      {filteredPosts?.map(post => (
        <Suspense key={post.id} fallback={<LoadingIcon />}>
          <Link to={`/post/${post.id}`}>
            <Post post={post} />
          </Link>
        </Suspense>
      ))}
      <LoadMoreButton
        loading={loading}
        visibility={Boolean(posts && posts?.length < MAX_COUNT)}
        onClick={handleLoadMore}
      />
    </Layout>
  );
};

export default withLogger(Posts);
