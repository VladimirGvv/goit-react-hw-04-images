import styles from './ImageGalleryItem.module.scss'
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  webformatURL,
  tags,
  largeImageURL,
  getImageUrl,
  toggleModal,
}) => {
  return (
    <li onClick={toggleModal} className={styles.ImageGalleryItem}>
      <img
        onClick={() => getImageUrl(largeImageURL)}
        src={webformatURL}
        alt={tags}
        className={styles.ImageGalleryItem_image}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  getImageUrl: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
