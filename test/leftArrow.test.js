import React from 'react';
import LeftArrow from '../client/src/components/LeftArrow.jsx';

describe('Left Arrow', () => {
  it('should render left arrow component', () => {
    const component = shallow(<LeftArrow />);
    expect(component).toMatchSnapshot();
  });
})


