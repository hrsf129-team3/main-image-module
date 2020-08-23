import React from 'react';
import styles from './app.scss';
import ImageList from './imageList.jsx';
import axios from 'axios';
import Carousel from './carousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allImages: [],
      isLoading: true,
    }

    // this.getSampleProductOneAllInfo = this.getSampleProductOneAllInfo.bind(this);
    this.getProductImages = this.getProductImages.bind(this);
  }


  componentDidMount() {
    // this.getSampleProductOneAllInfo();
    this.getProductImages();
  }

  // getSampleProductOneAllInfo() {
  //   axios.get('/product1info')
  //     .then((results) => {
  //       // console.log({results})
  //       this.setState({
  //         allImages: results.data,
  //         isLoading: false,
  //         // firstImage: results.data[0]
  //       });
  //     })
  //     .catch((err) => {
  //       console.log('error in get request', err)
  //     })
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

  getProductImages() {
    var productID = window.location.pathname;
    console.log("productID", productID);
    var id = productID.match(/(\d+)/)[0];
    var path = `/images/${id}`
    axios.get(path)
    .then((results) => {
      this.setState({
        allImages: results.data,
        isLoading: false,
      });
    })
    .catch((err) => {
      console.log('error in get request', err)
    })
  }

  render() {
    return (
      <div className={styles.app}>
        <Carousel allImages={this.state.allImages} isLoading={this.state.isLoading} imageLength={this.state.imageLength}/>
      </div>
    );
  }
}


export default App;
