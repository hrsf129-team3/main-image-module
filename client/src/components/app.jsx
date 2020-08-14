import React from 'react';
import styles from './style.scss';
import ImageList from './imageList.jsx';
import axios from 'axios';
import RightArrow from './rightArrow.jsx';
import LeftArrow from './leftArrow.jsx';
import HeaderImage from './headerImage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //initially starting setup with one product images shows instead of all images for all products
      allImages: [],
      imageIndex: 0,
      imagesLength: 0,
    }

    this.getSampleProductOneAllInfo = this.getSampleProductOneAllInfo.bind(this);
    // this.showInitialHeaderImage = this.showInitialHeaderImage.bind(this);
    // this.previousImage = this.previousImage.bind(this);
    // this.nextImage = this.nextImage.bind(this);
    // this.getSampleProductOneImages = this.getSampleProductOneImages.bind(this);
  }

  componentDidMount() {
    this.getSampleProductOneAllInfo();
    // this.showInitialHeaderImage();
  }

  //initially starting setup with one working image page

  // showInitialHeaderImage() {
  //   // return
  //   // this.state.allImages[0].image_url;
  // }

  getSampleProductOneAllInfo() {
    axios.get('/product1info')
      .then((results) => {
        this.setState({ allImages: results.data })
        this.setState({imagesLength: results.data.length});
      })
      .catch((err) => {
        console.log('error in get request', err)
      })
  }



  // nextImage() {
  //   if (this.state.imageIndex !== this.state.imagesLength - 1) {
  //     this.setState({imageIndex: imageIndex + 1})
  //   } else {
  //     this.setState({imageIndex: 0})
  //   }
  // }

  // previousImage() {
  //   if (this.state.imageIndex !== 0 ){
  //     this.setState({imageIndex: imageIndex - 1})
  //   } else {
  //     this.setState({imageIndex: this.state.imagesLength - 1})
  //   }
  // }

  // getSampleProductOneImages() {
  //   axios.get('/product1')
  //     .then((results) => {
  //       console.log('successful get request', results)
  //     })
  //     .catch((err) => {
  //       console.log('error in get request', err)
  //     })
  // }

  // getProductImages() {
  //   axios.get('/product/:id')
  //     .then((results) => {
  //       console.log('successful get request', results)
  //     })
  //     .catch((err) => {
  //       console.log('error in get request', err)
  //   })
  // }

  render() {
    // console.log('all images', this.state.allImages)
    // console.log(this.state.allImages[0],"imageurl");
    return (
      <div className={styles.app}>
        {/* <h1 className={styles.loader}>
          Page has loaded!
        </h1> */}
        <div className={styles.sideImages}>
          <ImageList allImages={this.state.allImages} />
        </div>
        <div className={styles.header}>
          <HeaderImage />
          <LeftArrow previousImage={this.previousImage} />
          <RightArrow nextImage={this.nextImage} />
        </div>
      </div>
    );
  }
}

export default App;
