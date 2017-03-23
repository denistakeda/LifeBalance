import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import SignIn from './screens/SignIn/SignIn';
import SignUp from './SignUp';

const scenes = Actions.create(
  <Scene key="root">
    <Scene
      key="signin"
      component={SignIn}
      title="SignIn"
      initial />
    <Scene
      key="signup"
      component={SignUp}
      title="SignUp" />
  </Scene>
);

export default scenes;
