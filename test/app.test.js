import React from 'react';
import App from '../client/src/components/app.jsx';

describe('App', () => {
  it('should render app component', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
})

// describe('App', () => {
//   const baseURL = "http://localhost:3007";
//   const status = [{
//     ...
//   }];
//   before(() => {
//     fetchMock.get(`${baseURL}/api`, status);
//   });

//   after(() => {
//     fetchMock.reset();
//     fetchMock.restore();
//   });

//   it('contains the correct number of components', (done) => {
//     const wrapper = mount(<ParentComponent />);

//     //This is not working - the length of ChildComponent is always 0
//     expect(wrapper.find(ChildComponent).length).to.equal(status.length);
//   });
// });

// it('contains the correct number of components', (done) => {
//   const wrapper = mount(<App />);
//   // wait for the API call has benn resolved
//   setTimeout() => {
//       wrapper.update();
//       expect(wrapper.find(ChildComponent).length).to.equal(status.length);
//       done();
//   });
// });