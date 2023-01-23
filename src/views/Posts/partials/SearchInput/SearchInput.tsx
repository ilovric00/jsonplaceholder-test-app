import React from 'react';
import withLogger from 'utils/hoc/withLogger';

import styles from './SearchInput.module.scss';

interface SearchInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onChange }) => (
  <div className={styles.container}>
    <input type="text" className={styles.input} onChange={onChange} placeholder="Search..." />
  </div>
);

export default withLogger(SearchInput);
