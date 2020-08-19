import React from 'react';
import ModalImage from './modalImage.jsx';

class ModalImageList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.allImages.map((image, index) => {
          return <ModalImage key={image.id} image={image} allImages={this.props.allImages} modalSideImageChange={this.props.modalSideImageChange} index={index}/>
        })}
      </div>
    )
  }

}

export default ModalImageList;
