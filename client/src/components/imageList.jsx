import React from 'react';
import styles from './style.scss';
import Image from './image.jsx';
// import HeaderImage from './headerImage.jsx';

class ImageList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.allImages.map((image) => {
          return <Image image={image} allImages={this.props.allImages} />
        })}
      </div>
    )
  }

}

export default ImageList;
