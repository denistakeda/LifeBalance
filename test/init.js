require('react-native-mock/mock');
require("babel-register");

var mockery =  require('mockery');
mockery.enable();

mockery.registerMock('react-native-router-flux', {Actions: {}});
