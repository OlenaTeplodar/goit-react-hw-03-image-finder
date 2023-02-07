import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchApiImg } from '../services/api';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';
import Loader from './Loader';

import css from './App.module.css';

class App extends Component {
  state = {
    images: [],
    search: '',
    page: 1,
    isLoading: false,
    error: null,
    currentImage: null,
  };

  componentDidUpdate(_, prevState) {
    const { search, page } = this.state;

    if (prevState.search !== search || prevState.page !== page) {
      this.getImages();
    }
  }

  async getImages() {
    try {
      this.setState({ isLoading: true });
      const { search, page } = this.state;
      const data = await fetchApiImg(search, page);

      if (data.hits.length === 0) {
        return toast.error('Oops, there are no such pictures. Try again');
      }

      this.setState(({ images }) => ({ images: [...images, ...data.hits] }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  searchImages = ({ search }) => {
    if (search.trim() === '') {
      this.setState({ images: [], page: 1 });
      return toast.error('Search field must be filled');
    }

    this.setState({ search, images: [], page: 1 });
  };

  onLoadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  openModal = data => {
    this.setState({ currentImage: data });
  };

  onClose = () => {
    this.setState({ currentImage: null });
  };

  render() {
    const { onLoadMore, searchImages, openModal, onClose } = this;
    const { images, isLoading, error, currentImage, search } = this.state;

    return (
      <>
        <Searchbar onSubmit={searchImages} />

        {error && <p>Something went wrong. Try reloading the page</p>}

        {images.length > 0 && (
          <ImageGallery images={images} openModal={openModal} search={search} />
        )}

        {images.length > 0 && !isLoading && <Button onLoadMore={onLoadMore} />}

        <ToastContainer />

        {isLoading && <Loader />}

        {currentImage && (
          <Modal
            className={css.CurrentImage}
            currentImage={currentImage}
            search={search}
            onClose={onClose}
          />
        )}
      </>
    );
  }
}

export default App;
