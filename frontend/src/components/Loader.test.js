import React from 'react'
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow } from 'enzyme';

import Loader from './Loader'
configure({ adapter: new Adapter() });
test('renders Loader', () => {
    const wrapped = shallow(<Loader />)
    expect(wrapped.find('h3').length).toEqual(1)
});