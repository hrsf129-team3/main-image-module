import React from 'react';

class LeftArrow extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperLeftArrow = this.wrapperLeftArrow.bind(this);
  }

  wrapperLeftArrow() {
    //On click we want to move to the left either carousel
    this.props.moveLeft();
  }

  render() {
    return(
      <div className={this.props.className}>
        <svg onClick={this.wrapperLeftArrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M16,21a0.994,0.994,0,0,1-.664-0.253L5.5,12l9.841-8.747a1,1,0,0,1,1.328,1.494L8.5,12l8.159,7.253A1,1,0,0,1,16,21Z"></path></svg>
      </div>
    )
  }
}

export default LeftArrow;