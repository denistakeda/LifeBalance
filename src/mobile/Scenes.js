import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import SignInScreen from './screens/SignInScreen/SignInScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';

const scenes = Actions.create(
  <Scene key="root">
    <Scene
      key="signin"
      component={SignInScreen}
      title="SignIn"
      initial />
    <Scene
      key="signup"
      component={SignUpScreen}
      title="SignUp" />
    <Scene
      key="home"
      component={HomeScreen}
      title="Home" />
  </Scene>
);

export default scenes;
