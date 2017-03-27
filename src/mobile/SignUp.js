import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { colorWhite, greyColor, normalTextSize } from './config/StyleConst';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: greyColor,
  },
  welcome: {
    fontSize: normalTextSize,
    textAlign: 'center',
    margin: 10,
    color: colorWhite,
  },
});

const SignUp = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      SignUp Screen
    </Text>
  </View>
);

SignUp.displayName = 'SignUp';

export default SignUp;
