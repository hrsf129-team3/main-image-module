import React from 'react';
import styles from './style.scss';
import Image from './image.jsx';
import HeaderImage from './headerImage.jsx';

class ImageList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderImage />
        {this.props.allImages.map((image) => {
          return <Image image={image} allImages={this.props.allImages} />
        })}
        {/* <img src={props.allImages[0].image_url} className={styles.headerImage} alt="header image"></img> */}
      </div>
    )
  }

}

export default ImageList;
