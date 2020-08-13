import React from 'react';
import styles from './style.scss';

class HeaderImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className={styles.headerImageContainer}>
        <svg className={styles.leftArrow} onClick={this.props.previousImage} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 21a.994.994 0 01-.664-.253L5.5 12l9.841-8.747a1 1 0 011.328 1.494L8.5 12l8.159 7.253A1 1 0 0116 21z"/></svg>
        <img className={styles.headerImage} src="https://etsy-main-image-module.s3-us-west-1.amazonaws.com/african-lamp/african+lamp+1.jpg" ></img>
          <svg className={styles.rightArrow}  onClick={this.props.nextImage} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 21a1 1 0 01-.664-1.747L15.5 12 7.336 4.747a1 1 0 011.328-1.494L18.5 12l-9.836 8.747A.994.994 0 018 21z"/></svg>
        </div>
        {/* <img src={this.props.allImages[0].image_url} className={styles.headerImage} alt="headerImage" ></img> */}
      </div>
    )
  }
}

export default HeaderImage;
