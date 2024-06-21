import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import { AboutScreen, AboutScreenParams } from './AboutScreen';
import { NavigatorScreenParams } from '@react-navigation/native';
import { MainBottomTabNav, MainBottomTabParamList } from './MainBottomTabNav';

export type RootStackParamList = Readonly<{
    AboutScreen: AboutScreenParams;
    MainBottomTabNav: NavigatorScreenParams<MainBottomTabParamList>;
    // ExampleScreen: ExampleScreenParams;
    // NestedNav: NavigatorScreenParams<NestedParamList>;
}>;

const Stack = createStackNavigator<RootStackParamList>();

export function RootStackNav() {
    return (
        // API: https://bit.ly/3v8FPox
        <Stack.Navigator>

            <Stack.Screen name="MainBottomTabNav" component={MainBottomTabNav} />
            <Stack.Screen name="AboutScreen" component={AboutScreen} />


        </Stack.Navigator>
    );
};