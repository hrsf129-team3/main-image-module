import React from 'react';
import styles from './carousel.scss';
import ImageList from './imageList.jsx';
import axios from 'axios';
import Modal from './modal.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0,
      mainImage: {},
      popup: false,
    }
    this.sideImageChange = this.sideImageChange.bind(this);
    this.previousImage = this.previousImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.showMainImage = this.showMainImage.bind(this);
    this.modalPopup = this.modalPopup.bind(this);
    this.exitModal = this.exitModal.bind(this);
  }

  nextImage() {
    if (this.state.imageIndex !== this.props.allImages.length - 1) {
      var increment = this.state.imageIndex + 1
      this.setState({imageIndex: increment});
      console.log("image index", this.state.imageIndex);
    } else if (this.state.imageIndex === this.props.allImages.length - 1) {
      this.setState({imageIndex: 0})
    }
  }

  previousImage() {
    if (this.state.imageIndex !== 0) {
      var decrement = this.state.imageIndex - 1;
      this.setState({imageIndex: decrement});
    } else if (this.state.imageIndex === 0) {
      this.setState({imageIndex: this.props.allImages.length - 1})
      // console.log("reached beginning")
    }
  }

  sideImageChange(index) {
    console.log("index in carousel", index);
    this.setState({
      imageIndex: index
    })
  }

  // showing all MAIN images
  showMainImage(index) {
    if (this.props.allImages.length > 0) {
      var imgSrc = this.props.allImages[this.state.imageIndex].image_url;
      // console.log({ imgSrc })
    }
    return (
      <div>
        <img className={styles.headerImage} src={imgSrc} onClick={this.modalPopup} />
        <Modal popup={this.state.popup} allImages={this.props.allImages} exitModal={this.exitModal}/>
      </div>
    )
  }

  modalPopup(event) {
    console.log("header image clicked!");
    this.setState({
      popup: true
    });
  }

  exitModal(event) {
    console.log("exit modal")
    this.setState({
      popup: false
    })
  }

  render() {
    return (
      <div className={styles.carousel}>
        <div className={styles.sideImages}>
          <ImageList allImages={this.props.allImages} showMainImage={this.showMainImage} sideImageChange={this.sideImageChange}/>
        </div>
        <div className={styles.header}>
          <div className={styles.leftArrow}>
            <svg onClick={this.previousImage} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 21a.994.994 0 01-.664-.253L5.5 12l9.841-8.747a1 1 0 011.328 1.494L8.5 12l8.159 7.253A1 1 0 0116 21z" /></svg>
          </div>
          {this.showMainImage() }
          <div className={styles.iconsContainer}>

            <div className={styles.heartContainer}>
              <svg className={styles.heart} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21C10.349 21 2 14.688 2 9c0-3.421 2.364-6 5.5-6A6.912 6.912 0 0112 5.051 6.953 6.953 0 0116.5 3C19.636 3 22 5.579 22 9c0 5.688-8.349 12-10 12zM7.5 5C5.472 5 4 6.683 4 9c0 4.108 6.432 9.325 8 10 1.564-.657 8-5.832 8-10 0-2.317-1.472-4-3.5-4-1.979 0-3.7 2.105-3.721 2.127l-.788.973-.775-.98C11.186 7.083 9.5 5 7.5 5z" /></svg>
            </div>
            <div className={styles.rightArrowContainer} >
              <svg className={styles.rightArrow} onClick={this.nextImage} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 21a1 1 0 01-.664-1.747L15.5 12 7.336 4.747a1 1 0 011.328-1.494L18.5 12l-9.836 8.747A.994.994 0 018 21z" /></svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
