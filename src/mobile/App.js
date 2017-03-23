import React from 'react';
import Relay from 'react-relay';
import {Router} from 'react-native-router-flux';
import {
  RelayNetworkLayer,
  urlMiddleware,
  authMiddleware,
} from 'react-relay-network-layer';

import scenes from './Scenes';
import {BACKEND_URL} from '../../config/env';
import {getToken} from './services/AuthorizationService';


Relay.injectNetworkLayer(new RelayNetworkLayer([
  urlMiddleware({
    url: () => BACKEND_URL,
  }),
  authMiddleware({
    token: getToken(),
    allowEmptyToken: true,
    header: 'token',
    prefix: '',
  })
]));

const App = () => <Router scenes={scenes} />;
App.displayName = 'App';

export default App;
