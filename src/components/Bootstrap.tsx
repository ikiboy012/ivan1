import React, { useEffect } from 'react';
import {
  ImageBackground,
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import Orientation from 'react-native-orientation-locker';

export function Bootstrap() {
  useEffect(() => {
    Orientation.lockToPortrait();
    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <SafeAreaView style={{ flex: 1, backgroundColor: '#560705' }}>
        <StatusBar barStyle="light-content" backgroundColor="#560705" />

        <ImageBackground
          resizeMode="cover"
          style={{ width: '100%', height: '100%' }}
          source={{
            uri: 'https://www.xtrafondos.com/wallpapers/vertical/tony-stark-iron-man-6377.jpg',
          }}>
          {/* >>> ADD COMPONENTS HERE <<< */}
        </ImageBackground>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
