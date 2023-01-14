import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import api from '../FetchImages/fetchImages';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import styles from './App.module.scss'

export class App extends Component {
  state = {
    query: '',
    page: 1,
    items: [],
    showButton: false,
    showModal: false,
    largeImageURL: '',
    loading: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });
      api
        .fetchImages(this.state.query, this.state.page)
        .then(items => {
          if (items.hits.length === 0) {
            this.setState({
              showButton: false,
            });
          }
          this.setState(prevState => ({
            items: [...prevState.items, ...items.hits],
          }));
          this.setState({
            showButton:
              this.state.page < Math.ceil(items.total / 12) ? true : false,
            loading: false,
          });
        })
        .catch(error => console.log(error))
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  handleFormSubmit = query => {
    this.setState({
      query,
      page: 1,
      items: [],
      showButton: false,
      showModal: false,
      largeImageURL: '',
      loading: false,
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  getImageUrl = url => {
    this.setState({ largeImageURL: url });
  };

  render() {
    const { items, showButton, largeImageURL, loading } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          items={items}
          getImageUrl={this.getImageUrl}
          toggleModal={this.toggleModal}
        />
        {this.state.showModal && (
          <Modal onClose={this.toggleModal} largeImageURL={largeImageURL} />
        )}
        {loading && <Loader />}
        {showButton && <Button loadMore={this.loadMore} />}
      </div>
    );
  }
};