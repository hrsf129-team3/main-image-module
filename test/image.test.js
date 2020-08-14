import React from 'react';
import Image from '../client/src/components/image.jsx';


describe('Image', () => {
  it('should render image component', () => {
    const component = shallow(<Image image={[]}/>);
    expect(component).toMatchSnapshot();
  });
})

