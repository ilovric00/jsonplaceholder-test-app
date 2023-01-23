import React from 'react';
import Button from 'components/Button';
import withLogger from 'utils/hoc/withLogger';

interface LoadMoreButtonProps {
  loading: boolean;
  visibility: boolean;
  onClick: () => void;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ loading, visibility = true, onClick }) => {
  if (!visibility) {
    return null;
  }

  return (
    <Button size="large" onClick={onClick} disabled={loading} fullWidth>
      {loading ? 'Loading...' : 'Load more'}
    </Button>
  );
};

export default withLogger(LoadMoreButton);
