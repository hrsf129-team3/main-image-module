import React from 'react';
import styles from './style.scss';

class HeaderImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <img src={this.props.allImages[0].image_url} className={styles.headerImage} alt="headerImage" ></img> */}
      </div>
    )
  }
}

export default HeaderImage;
