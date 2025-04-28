import React from 'react';
import styles from './search.module.css';
import { FaSearch } from 'react-icons/fa'; // import icon kính lúp

const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Tìm kiếm..."
        className={styles.searchInput}
      />
      <button className={styles.searchButton}>
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
