import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './mobile/App';

export default class LifeBalance extends Component {
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('LifeBalance', () => LifeBalance);
