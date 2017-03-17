import React from 'react';
import {Router} from 'react-native-router-flux';

import scenes from './Scenes';

const App = () => <Router scenes={scenes} />;
App.displayName = 'App';

export default App;
