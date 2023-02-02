
export const ImageGalleryItem = ({ id, tags, webformatURL, largeImageURL, openModal }) => {
  return (
    <li className={gallery - item}>
  <img src={webformatURL} alt={tags} onClick={() => openModal({src: largeImageURL, id: id })} />
</li>
  )
}




