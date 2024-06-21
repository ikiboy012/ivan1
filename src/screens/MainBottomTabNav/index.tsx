import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { Main1Screen, Main1ScreenParams } from './Main1Screen';
import { Main2Screen, Main2ScreenParams } from './Main2Screen';

export type MainBottomTabParamList = {
    Main1Screen: Main1ScreenParams;
    Main2Screen: Main2ScreenParams;
    // NestedNav: NavigatorScreenParams<NestedParamList>;
};

const BottomTabs = createBottomTabNavigator<MainBottomTabParamList>();

export function MainBottomTabNav() {
    return (
        // API: https://bit.ly/3FN6HPL
        <BottomTabs.Navigator >

            <BottomTabs.Screen name="Main1Screen" component={Main1Screen} />
            <BottomTabs.Screen name="Main2Screen" component={Main2Screen} />
        </BottomTabs.Navigator>
    );
};