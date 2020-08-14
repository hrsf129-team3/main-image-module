import React from 'react';
import ImageList from '../client/src/components/imageList.jsx';

describe('ImageList', () => {
  it('should render image list component', () => {
    const component = shallow(<ImageList allImages={[]} />);
    expect(component).toMatchSnapshot();
  });
})

