import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { findByTestAttr } from '../../../test/test.utils';

import Congrats from './Congrats-componenet';

Enzyme.configure({ adapter: new Adapter() });

const setup = (props={}) => {
    return shallow(<Congrats {...props} />)
};

test('renders Congrats without errors', () => {

});

test('renders no text when "success" prop is false', () => {

});
test('renders Non epty congrats message', () => {

});