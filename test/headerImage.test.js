import React from 'react';
import HeaderImage from '../client/src/components/HeaderImage.jsx';

describe('HeaderImage', () => {
  it('should render header image component', () => {
    const component = shallow(<HeaderImage />);
    expect(component).toMatchSnapshot();
  });
})


