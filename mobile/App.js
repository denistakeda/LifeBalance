import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ScarletScreen from './SignIn';
import GrayScreen from './SignUp';
import {Router, Scene} from 'react-native-router-flux';

const App = () => {
    return (
        <Router>
          <Scene key="root">
            <Scene key="scarlet"
                   component={ScarletScreen}
                   title="SignIn"
                   initial
            />
            <Scene
                key="gray"
                component={GrayScreen}
                title="SignUp"
            />
          </Scene>
        </Router>
    );
}
App.displayName = 'App';

export default App;
