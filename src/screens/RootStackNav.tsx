import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import { HomeScreen, HomeScreenParams } from './HomeScreen';
import { AboutScreen, AboutScreenParams } from './AboutScreen';

export type RootStackParamList = Readonly<{
    HomeScreen: HomeScreenParams;
    AboutScreen: AboutScreenParams;
    // ExampleScreen: ExampleScreenParams;
    // NestedNav: NavigatorScreenParams<NestedParamList>;
}>;

const Stack = createStackNavigator<RootStackParamList>();

export function RootStackNav() {
    return (
        // API: https://bit.ly/3v8FPox
        <Stack.Navigator
        // initialRouteName="..."
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="AboutScreen" component={AboutScreen} />
        </Stack.Navigator>
    );
};