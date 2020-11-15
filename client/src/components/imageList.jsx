import React from 'react';
// import styles from './imageList.scss';
import Image from './image.jsx';
// import HeaderImage from './headerImage.jsx';

class ImageList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.allImages.map((image, index) => {
          return <Image key={image.id} image={image} allImages={this.props.allImages} showMainImage={this.props.showMainImage} sideImageChange={this.props.sideImageChange} modalSideImageChange={this.props.modalSideImageChange} index={index}/>
        })}
      </div>
    )
  }

}

export default ImageList;
