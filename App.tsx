import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorageKey, getAsyncStorage, removeAsyncStorage, setAsyncStorage } from './src/config/asyncstorageConfig';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        contentContainerStyle={{ padding: 10, gap: 10 }}
      >
        <Text>Hello</Text>
        <Button
          title='SAVE'
          onPress={async () => {
            try {
              setAsyncStorage(AsyncStorageKey.FOOD, 'BECKA SNICLA');
            } catch (e) {
              // saving error
            }
          }}
        />

        <Button
          title='GET'
          onPress={async () => {
            try {
              const value = await getAsyncStorage(AsyncStorageKey.FOOD);
              if (value !== null) {
                Alert.alert(value ?? 'nedefinisano');
              }
              else {
                Alert.alert('SIPAK');
              }
            } catch (e) {
              // error reading value
            }
          }}
        />

        <Button
          title='CLEAR'
          onPress={async () => {
            try {
              removeAsyncStorage(AsyncStorageKey.FOOD);
            } catch (e) {
              // saving error
            }
          }}
        />

        {/* Icons: https://pictogrammers.com/library/mdi/ */}
        <Icon name="flower" size={100} color="blue" />
        <IonIcon name="airplane-outline" size={100} color="blue" />
        <View style={{width:200}}>
          <Icon.Button
            name="facebook"
            backgroundColor="#3b5998"
            style={{ width: 200, }}

          // onPress={this.loginWithFacebook}
          >
            Login with Facebook
          </Icon.Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
