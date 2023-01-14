import styles from './Button.module.scss';
import PropTypes from 'prop-types';

export const Button = ({ loadMore }) => {
  return (
      <button onClick={loadMore} type="button" className={styles.Button}>
      Load more
    </button>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};