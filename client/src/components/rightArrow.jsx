import React from 'react';
import styles from './style.scss';


class RightArrow extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div className={styles.rightArrow}  >
         <svg onClick={this.props.nextImage} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 21a1 1 0 01-.664-1.747L15.5 12 7.336 4.747a1 1 0 011.328-1.494L18.5 12l-9.836 8.747A.994.994 0 018 21z"/></svg>
      </div>
    )
  }
}
export default RightArrow;