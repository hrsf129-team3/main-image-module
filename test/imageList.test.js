import React from 'react';
import ImageList from '../client/src/components/imageList.jsx';

describe('ImageList', () => {
  it('should render image list component', () => {
    const component = shallow(<ImageList allImages={[]} />);
    expect(component).toMatchSnapshot();
  });
})


// describe('List tests', () => {

//   it('renders list-items', () => {
//     const items = ['one', 'two', 'three'];
//     const wrapper = shallow(<ImageList allImages={[]} />);

//     // Expect the wrapper object to be defined
//     expect(wrapper.find('.list-items')).toBeDefined();
//     expect(wrapper.find('.item')).toHaveLength(items.length);
//   });

//   it('renders correct text in item', () => {
//     const items = ['John', 'James', 'Luke'];
//     const wrapper = shallow(<List items={items} />);

//     //Expect the child of the first item to be an array
//     expect(wrapper.find('.item').get(0).props.children).toEqual('John');
//   });
// });