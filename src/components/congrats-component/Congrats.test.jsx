import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { findByTestAttr } from '../../../test/test.utils';

import Congrats from './Congrats-component';

Enzyme.configure({ adapter: new Adapter() });

const setup = (props={}) => {
    return shallow(<Congrats {...props} />)
};

test('renders Congrats without errors', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.lenght).toBe(1);
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