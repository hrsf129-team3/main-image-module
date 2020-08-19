import React from 'react';
import styles from './modal.scss';
// import HeaderImage from './headerImage.jsx';

class ModalImage extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index, event) {
    this.props.modalSideImageChange(this.props.index);
  }

  render() {
    return (
      <div className={styles.modalSideImagesContainer}>
        <img src={this.props.image.image_url}  alt="modal product image" className={styles.modalSideImages} onClick={() => {this.handleClick(this.props.index, event)}}></img>
      </div>
    )
  }
}

export default ModalImage;
