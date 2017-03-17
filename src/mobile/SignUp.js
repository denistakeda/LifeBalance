import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { colorWhite, colorGrey, normalTextSize } from './StyleConst';

const SignUp = () => (
    <View style={styles.container}>
        <Text style={styles.welcome}>
            SignUp Screen
        </Text>
    </View>
);
SignUp.displayName = 'SignUp';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colorGrey,
    },
    welcome: {
        fontSize: normalTextSize,
        textAlign: 'center',
        margin: 10,
        color: colorWhite,
    },
});

export default SignUp;
