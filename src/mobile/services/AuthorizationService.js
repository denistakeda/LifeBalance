import {
  AsyncStorage,
} from 'react-native';

let _token;

AsyncStorage.getItem('token', token => _token = token); // eslint-disable-line no-return-assign

export const getToken = () => _token;

export const setToken = (token) => {
  _token = token;
  AsyncStorage.setItem('token', token);
  return _token;
};

