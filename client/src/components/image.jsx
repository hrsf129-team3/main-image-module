import React from 'react';
import styles from './style.scss';
// import HeaderImage from './headerImage.jsx';

class Image extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={this.props.image.image_url} className={styles.sideImages} alt="product image"></img>
        {/* <HeaderImage allImages={this.props.allImages}/> */}
        {/* <img src={this.props.image[0].image_url} className={styles.headerImage} alt="header image"></img> */}
        {/* <a href={props.image.image_url}></a> */}
      </div>
    )
  }
}

export default Image;
