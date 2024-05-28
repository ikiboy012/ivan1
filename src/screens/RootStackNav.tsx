import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import { HomeScreen, HomeScreenParams } from './HomeScreen';

export type RootStackParamList = Readonly<{
    HomeScreen: HomeScreenParams;
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
        </Stack.Navigator>
    );
};