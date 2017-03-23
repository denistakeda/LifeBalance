import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Relay from 'react-relay';
import { Actions } from 'react-native-router-flux';
import { colorBlack, normalTextSize } from '../../config/StyleConst';
import AppRoutes from '../../AppRoutes';

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

const SignInComponent = () => (
  <View style={styles.container}>
    <Text
      style={styles.welcome}
      onPress={() => Actions.signup()}>

      SignIn Screen

    </Text>
  </View>
);

SignInComponent.displayName = 'SignInComponent';

const SignInConnected = Relay.createContainer(SignInComponent, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        user {
          id
          email
        }
      }
    `
  },
});

const SignIn = () => (
  <Relay.RootContainer
    Component={SignInConnected}
    route={new AppRoutes()} />
);

export default SignIn;
