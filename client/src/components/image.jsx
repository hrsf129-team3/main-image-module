import React from 'react';
import styles from './carousel.scss';
// import HeaderImage from './headerImage.jsx';

class Image extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sideImageIndex: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index, event) {
    this.props.subImageChange(this.props.index);
    // this.props.modalSideImageChange(this.props.index);
  }

  highlightImage() {

  }

  render() {
    return (
      <div>
        <img src={this.props.image.image_url} alt="product image" className={styles.sideImages} onClick={() => {this.handleClick(this.props.index, event)}}></img>
      </div>
    )
  }
}

export default Image;
