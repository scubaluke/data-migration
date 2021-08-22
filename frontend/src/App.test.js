import React from 'react';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';


import { shallow } from 'enzyme';

import App from './App'
Enzyme.configure({ adapter: new Adapter() });
test('renders Loader', () => {
    const wrapped = shallow(<App />)
    expect(wrapped.find('h1').length).toEqual(1)
});
