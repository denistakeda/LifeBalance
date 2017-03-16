import React from 'react';
import {Actions, Scene, Router} from 'react-native-router-flux';
import SignIn from './SignIn';
import SignUp from './SignUp';
const scenes = Actions.create(
    <Scene key="root">
        <Scene key="signin"
               component={SignIn}
               title="SignIn"
               initial />
        <Scene
            key="signup"
            component={SignUp}
            title="SignUp" />
    </Scene>
);

const Routing = () => <Router scenes={scenes} />;
Routing.displayName = 'Routing';
export default Routing;