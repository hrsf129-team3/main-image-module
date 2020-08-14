import React from 'react';
import styles from './style.scss';
// import HeaderImage from './headerImage.jsx';

class Image extends React.Component {
  constructor(props) {
    super(props);

    this.selectHeader= this.selectHeader.bind(this);
  }

  selectHeader() {
    console.log("new header selected");
  }

  render() {
    return (
      <div>
        <img onClick={this.selectHeader} src={this.props.image.image_url} className={styles.sideImages} alt="product image"></img>
      </div>
    )
  }
}

export default Image;
