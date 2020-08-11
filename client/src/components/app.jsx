import React from 'react';
import styles from './style.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
  }


  getSampleProductOneImages() {
    axios.get('/product1')
      .then((results) => {
        console.log('successful get request', results)
      })
      .catch((err) => {
        console.log('error in get request', err)
    })
  }

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
    return (
      <h1 className={styles.loader}>
        Page has loaded!
      </h1>
    );
  }
}

export default App;
