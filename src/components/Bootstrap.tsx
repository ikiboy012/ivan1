import React, { useEffect } from 'react';
import {
  ImageBackground,
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import { navigationRef, useInitNavigation } from '../lib/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackNav } from '../screens/RootStackNav';

export function Bootstrap() {
  const {
    isNavigationReady, onNavReady, onNavStateChange, onUnhandledNavAction,
  } = useInitNavigation();

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
        <NavigationContainer
          ref={navigationRef}
          onReady={onNavReady}
          onStateChange={onNavStateChange}
          onUnhandledAction={onUnhandledNavAction}
        >
          <RootStackNav />
        </NavigationContainer>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
