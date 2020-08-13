import React from 'react';
// import Enzyme, { shallow } from 'enzyme';
import Image from '../client/src/components/image.jsx';
// import Image from '../components/image.jsx';

//
// const Adapter = require('enzyme-adapter-react-16');


// Enzyme.configure({ adapter: new Adapter() })

describe('Image', () => {
  it('should render image component', () => {
    const component = shallow(<Image image={[]}/>);
    expect(component).toMatchSnapshot();
  });
})

