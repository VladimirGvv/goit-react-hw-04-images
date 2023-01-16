import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import styles from './Modal.module.scss'
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export function Modal ({ largeImageURL, onClose }) {
  
 useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        console.log(event.code);
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div onClick={handleBackdropClick} className={styles.Overlay}>
      <div className={styles.Modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  };