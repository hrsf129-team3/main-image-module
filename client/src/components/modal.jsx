import React from "react";
import styles from './modal.scss';
import ImageList from './imageList.jsx';
import LeftArrow from './leftArrow.jsx';
import RightArrow from './rightArrow.jsx';
import ModalImageList from './modalImageList.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalImageIndex: 0,
    }
    this.showModalMainImage = this.showModalMainImage.bind(this);
    this.modalPreviousImage = this.modalPreviousImage.bind(this);
    this.modalNextImage = this.modalNextImage.bind(this);
    this.modalSideImageChange = this.modalSideImageChange.bind(this);
  }

  showModalMainImage(index) {
    if (this.props.allImages.length > 0) {
      var imgSrc = this.props.allImages[this.state.modalImageIndex].image_url;
    }
    return (
      <div>
        <img className={styles.modalImage} src={imgSrc} onClick={this.zoomIn} />
      </div>
    )
  }

  modalSideImageChange(index) {
    this.setState({
      modalImageIndex: index
    })
  }

  modalNextImage() {
    if (this.state.modalImageIndex !== this.props.allImages.length - 1) {
      var increment = this.state.modalImageIndex + 1
      this.setState({modalImageIndex: increment});
    } else if (this.state.modalImageIndex === this.props.allImages.length - 1) {
      this.setState({modalImageIndex: 0})
    }
  }

  modalPreviousImage() {
    if (this.state.modalImageIndex !== 0) {
      var decrement = this.state.modalImageIndex - 1;
      this.setState({modalImageIndex: decrement});
    } else if (this.state.modalImageIndex === 0) {
      this.setState({modalImageIndex: this.props.allImages.length - 1})
    }
  }

  render() {
    if (!this.props.popup) {
      return null;
    }
    return (
      <div>
        <div className={styles.modal}>
          <div className={styles.modalImageContainer}>
              <LeftArrow className={styles.modalLeftArrow} moveLeft={this.modalPreviousImage} />
              {this.showModalMainImage()}
              <RightArrow className={styles.modalRightArrow} moveRight={this.modalNextImage} />
          </div>
          <div className={styles.modalSideImagesContainer}>
            <ModalImageList className={styles.modalSideImages} allImages={this.props.allImages} modalSideImageChange={this.modalSideImageChange} />
          </div>
          <div className={styles.exitContainer}>
            <svg className={styles.exit} onClick={this.props.exitModal} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.414 12l6.293-6.293a1 1 0 00-1.414-1.414L12 10.586 5.707 4.293a1 1 0 00-1.414 1.414L10.586 12l-6.293 6.293a1 1 0 101.414 1.414L12 13.414l6.293 6.293a1 1 0 001.414-1.414z"/></svg>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;