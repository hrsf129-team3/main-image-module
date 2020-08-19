import React from "react";
import styles from './modal.scss';
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
      // console.log({ imgSrc })
    }
    return (
      <div>
        <img className={styles.modalImage} src={imgSrc} />
      </div>
    )
  }


  modalSideImageChange(index) {
    console.log("index in carousel", index);
    this.setState({
      modalImageIndex: index
    })
  }

  modalNextImage() {
    if (this.state.modalImageIndex !== this.props.allImages.length - 1) {
      var increment = this.state.modalImageIndex + 1
      this.setState({modalImageIndex: increment});
      // console.log("image index", this.state.modalImageIndex);
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
      <div className={styles.modal}>
        <div className={styles.modalLeftArrow}>
          <svg onClick={this.modalPreviousImage} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 21a.994.994 0 01-.664-.253L5.5 12l9.841-8.747a1 1 0 011.328 1.494L8.5 12l8.159 7.253A1 1 0 0116 21z" /></svg>
        </div>
        {this.showModalMainImage()}
        <div className={styles.modalRightArrow} >
          <svg onClick={this.modalNextImage} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 21a1 1 0 01-.664-1.747L15.5 12 7.336 4.747a1 1 0 011.328-1.494L18.5 12l-9.836 8.747A.994.994 0 018 21z" /></svg>
        </div>
        <div className={styles.exit}>
          <svg onClick={this.props.exitModal} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.414 12l6.293-6.293a1 1 0 00-1.414-1.414L12 10.586 5.707 4.293a1 1 0 00-1.414 1.414L10.586 12l-6.293 6.293a1 1 0 101.414 1.414L12 13.414l6.293 6.293a1 1 0 001.414-1.414z" /></svg>
        </div>
        <div className={styles.modalSideImages}>
          <ModalImageList allImages={this.props.allImages} modalSideImageChange={this.modalSideImageChange}/>
        </div>
      </div>
    )
  }
}

export default Modal;