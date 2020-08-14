import React from 'react';
import App from '../client/src/components/app.jsx';

describe('App', () => {
  it('should render app component', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
})
