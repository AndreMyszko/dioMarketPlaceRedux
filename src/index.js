import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './routes';

const App= () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#000000"/>
    <Routes />
  </>
);

export default App;
