import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import Relay from 'react-relay';
import { Actions } from 'react-native-router-flux';
import {
  mainTextColor,
  normalTextSize,
  greyColor,
  errorColor,
  linkColor,
} from '../../config/StyleConst';
import AppRoutes from '../../AppRoutes';
import SignUpMutation from '../../mutations/SignUpMutation';
import { setToken } from '../../services/AuthorizationService';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  welcome: {
    fontSize: normalTextSize,
    textAlign: 'center',
    margin: 10,
    color: mainTextColor,
  },
  input: {
    height: 40,
    borderColor: greyColor,
    borderWidth: 1,
    marginBottom: 10,
  },
  signInButton: {
    color: linkColor,
  },
  errorText: {
    color: errorColor,
    marginBottom: 10,
  },
  signUp: {
    color: linkColor,
  }
});

export class SignUpComponent extends React.Component {

  constructor() {
    super();

    this.state = {};
  }

  signUp = () => {
    this.props.relay.commitUpdate(
      new SignUpMutation({email: this.state.email, password: this.state.password}),
      {
        onSuccess: (response) => {
          setToken(response.signIn.token);
          Actions.home();
        },
        onFailure: () => this.setState({error: 'Server error'})
      }
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Sign Up</Text>
        <TextInput
          style={styles.input}
          onChangeText={email => this.setState({email})}
          value={this.state.email}
          keyboardType={'email-address'}
        />
        <TextInput
          style={styles.input}
          onChangeText={password => this.setState({password})}
          value={this.state.password}
          secureTextEntry
        />
        {
          !!this.state.error &&
          <Text style={styles.errorText}>{this.state.error}</Text>
        }
        <Text onPress={this.signUp} style={styles.signInButton} testID={'signInButton'}>Sign Up</Text>

        <Text>Or you can <Text style={styles.signUp} onPress={() => Actions.signin()}>sign in</Text></Text>
      </View>
    );
  }
}

const SignUpConnected = Relay.createContainer(SignUpComponent, {
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

const SignUp = () => (
  <Relay.RootContainer
    Component={SignUpConnected}
    route={new AppRoutes()} />
);

export default SignUp;
