import { useState } from 'react';
import styles from './Searchbar.module.scss'
import PropTypes from 'prop-types';

export function Searchbar ({ onSubmit }) {
  const [query, setQuery] = useState('');


  const handleNameChange = e => setQuery(e.currentTarget.value.toLowerCase());

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(query);
    setQuery('');
  };

  return (
      <header className={styles.Searchbar}>
        <form onSubmit={handleSubmit} className={styles.SearchForm}>
          <input
            value={query}
            onChange={handleNameChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={styles.SearchForm_input}
          />
          <button type="submit" className={styles.SearchForm_button}>
            &#128269;
          </button>
        </form>
      </header>
    );
  
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };