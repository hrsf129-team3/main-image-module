import React from 'react';
import styles from './style.scss';

class HeaderImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <img className={styles.headerImage} src="https://etsy-main-image-module.s3-us-west-1.amazonaws.com/african-lamp/african+lamp+1.jpg"></img>
      </div>
    )
  }
}

export default HeaderImage;
