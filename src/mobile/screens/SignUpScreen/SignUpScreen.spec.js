import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import {SignUpComponent} from './SignUpScreen';

describe('SignInScreen', () => {
    describe('rendering', () => {
        it('should render two text inputs and sign-in button', () => {
            const tree = shallow(<SignUpComponent />);
            assert.equal(tree.find('TextInput').length, 2);
            assert.equal(tree.find('Text[testID="signInButton"]').length, 1);
        });
    });
});
