import { Component } from 'react';
import styles from './Searchbar.module.scss'
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleNameChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
          <input
            value={this.state.query}
            onChange={this.handleNameChange}
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
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };