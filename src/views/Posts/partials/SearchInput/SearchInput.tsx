import React from 'react';
import withLogger from 'utils/hoc/withLogger';

import styles from './SearchInput.module.scss';

interface SearchInputProps {
  searchInput: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchInput, onChange }) => (
  <div className={styles.container}>
    <input type="text" className={styles.input} value={searchInput} onChange={onChange} placeholder="Search..." />
  </div>
);

export default withLogger(SearchInput);
