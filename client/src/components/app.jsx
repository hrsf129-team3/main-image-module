import React from 'react';
import styles from './style.scss';
import ImageList from './imageList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //initially starting setup with one product images shows instead of all images for all products
      allImages: [],
    }

    this.getSampleProductOneAllInfo = this.getSampleProductOneAllInfo.bind(this);
    // this.getSampleProductOneImages = this.getSampleProductOneImages.bind(this);
  }

  componentDidMount() {
    this.getSampleProductOneAllInfo();
  }

  //initially starting setup with one working image page

  getSampleProductOneAllInfo() {
    axios.get('/product1info')
      .then((results) => {
        this.setState({ allImages: results.data })
      })
      .catch((err) => {
        console.log('error in get request', err)
      })
  }

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
    return (
      <div>
        {/* <h1 className={styles.loader}>
          Page has loaded!
        </h1> */}
        <ImageList allImages={this.state.allImages} />
      </div>
    );
  }
}

export default App;
