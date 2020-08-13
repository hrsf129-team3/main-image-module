import React from 'react';
import styles from './style.scss';


class LeftArrow extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div>
      <svg className={styles.leftArrow} onClick={this.props.previousImage} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 21a.994.994 0 01-.664-.253L5.5 12l9.841-8.747a1 1 0 011.328 1.494L8.5 12l8.159 7.253A1 1 0 0116 21z"/></svg>
      </div>
    )
  }
}
export default LeftArrow;