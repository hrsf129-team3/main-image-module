import React from 'react';
import RightArrow from '../client/src/components/rightArrow.jsx';

describe('Right Arrow', () => {
  it('should render right arrow component', () => {
    const component = shallow(<RightArrow />);
    expect(component).toMatchSnapshot();
  });
})


