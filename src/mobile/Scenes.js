import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import SignInScreen from './screens/SignInScreen/SignInScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';

const scenes = Actions.create(
  <Scene key="root">
    <Scene
      key="signin"
      type="replace"
      component={SignInScreen}
      title="SignIn"
      initial />
    <Scene
      key="signup"
      type="replace"
      component={SignUpScreen}
      title="SignUp" />
    <Scene
      key="home"
      type="replace"
      component={HomeScreen}
      title="Home" />
  </Scene>
);

export default scenes;
