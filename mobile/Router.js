/**
 * Created by yura on 14.03.17.
 */
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
/* ... */
class _Router extends React.Component {
    render() {
        return <Router scenes={scenes}/>
    }
}

export default _Router