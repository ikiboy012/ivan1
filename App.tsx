import React from 'react';
import {LogBox, Platform, UIManager} from 'react-native';
import {Bootstrap} from './src/components/Bootstrap';

LogBox.ignoreLogs([]);

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

function App() {
  return <Bootstrap />;
}

export default App;
