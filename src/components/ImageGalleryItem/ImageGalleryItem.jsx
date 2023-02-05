import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ src, tags, largeImageURL, openModal }) => {
  return (
    <li
      className={css.ImageGalleryItem}
      onClick={() => openModal({ largeImageURL, tags })}
    >
      <img className={css.ImageGalleryItemImage} src={src} alt={tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
