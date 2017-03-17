import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { colorBlack, normalTextSize } from './config/StyleConst';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: normalTextSize,
    textAlign: 'center',
    margin: 10,
    color: colorBlack,
  },
});

const SignIn = () => (
  <View style={styles.container}>
    <Text
      style={styles.welcome}
      onPress={() => Actions.signup()}>

      SignIn Screen

    </Text>
  </View>
);
SignIn.displayName = 'SignIn';

export default SignIn;
