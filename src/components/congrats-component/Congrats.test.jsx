import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import CheckPropTypes from 'check-prop-types';

import { findByTestAttr } from '../../../test/test.utils';

import Congrats from './Congrats-component';

Enzyme.configure({ adapter: new Adapter() });

const setup = (props={}) => {
    return shallow(<Congrats {...props} />)
};

test('renders Congrats without errors', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
});

test('renders no text when "success" prop is false', () => {
    const wrapper = setup({ success: false});
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
});

test('renders Non epty congrats message', () => {
    const wrapper = setup({ success: true });
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().lenght).not.toBe(0);
});

test('does not have warning with expected props', () => {
    const expectedProp = { success: false };
    const propError = CheckPropTypes(Congrats.propTypes, expectedProp, 'prop', Congrats.name);
    expect(propError).toBeUndefined();
});