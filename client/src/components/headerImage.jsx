import React from 'react';
import styles from './style.scss';

class HeaderImage extends React.Component {
  constructor(props) {
    super(props);
  }

  // showFirstImage () {
  //   if (this.props.allImages[0] !== undefined) {
  //     return this.props.allImages[0].image_url;
  //   }
  // }

  render() {
    return (
      <div>
        <img className={styles.headerImage} src={this.props.firstImage}></img>
      </div>
    )
  }
}

export default HeaderImage;
