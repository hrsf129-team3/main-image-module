import React from 'react';
import styles from './carousel.scss';
import ImageList from './imageList.jsx';
import axios from 'axios';
import Modal from './modal.jsx';
import LeftArrow from './leftArrow.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0,
      mainImage: {},
      popup: false,
      heart: false,
    }
    this.sideImageChange = this.sideImageChange.bind(this);
    this.previousImage = this.previousImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.showMainImage = this.showMainImage.bind(this);
    this.modalPopup = this.modalPopup.bind(this);
    this.exitModal = this.exitModal.bind(this);
    this.heartClicked = this.heartClicked.bind(this);
  }

  nextImage(index) {
    if (this.state.imageIndex !== this.props.allImages.length - 1) {
      var increment = this.state.imageIndex + 1
      this.setState({imageIndex: increment});
    } else if (this.state.imageIndex === this.props.allImages.length - 1) {
      this.setState({imageIndex: 0})
    }
  }

  previousImage(index) {
    if (this.state.imageIndex !== 0) {
      var decrement = this.state.imageIndex - 1;
      this.setState({imageIndex: decrement});
    } else if (this.state.imageIndex === 0) {
      this.setState({imageIndex: this.props.allImages.length - 1})
    }
  }

  sideImageChange(index) {
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
    this.setState({
      popup: true
    });
  }

  exitModal(event) {
    this.setState({
      popup: false
    })
  }

  heartClicked() {
    this.setState(state => ({
      heart: !state.heart
    }));
  }

  render() {
    return (
      <div className={styles.carousel}>
        {/* <p>Test if this is working</p> */}
        <div className={styles.sideImages}>
          <ImageList allImages={this.props.allImages} showMainImage={this.showMainImage} sideImageChange={this.sideImageChange}/>
        </div>
        <div className={styles.header}>
          <div className={styles.leftArrowContainer}>
            <LeftArrow className={styles.leftArrow} moveLeft={this.previousImage}/>
            {/* <svg div className={styles.leftArrow} onClick={this.previousImage} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M16,21a0.994,0.994,0,0,1-.664-0.253L5.5,12l9.841-8.747a1,1,0,0,1,1.328,1.494L8.5,12l8.159,7.253A1,1,0,0,1,16,21Z"></path></svg> */}
          </div>
          {this.showMainImage() }
          <div className={styles.iconsContainer}>
            <div className={styles.heartContainer}>
              <div onClick={this.heartClicked}>
              {this.state.heart ? <svg className={styles.likedHeart} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M16.5,3A6.953,6.953,0,0,0,12,5.051,6.912,6.912,0,0,0,7.5,3C4.364,3,2,5.579,2,9c0,5.688,8.349,12,10,12S22,14.688,22,9C22,5.579,19.636,3,16.5,3Z"></path></svg> : <svg className={styles.heart} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M16.5,3A6.953,6.953,0,0,0,12,5.051,6.912,6.912,0,0,0,7.5,3C4.364,3,2,5.579,2,9c0,5.688,8.349,12,10,12S22,14.688,22,9C22,5.579,19.636,3,16.5,3Z"></path></svg>}
              </div>
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

