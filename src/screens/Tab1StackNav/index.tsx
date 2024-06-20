import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import { Fire1Screen, Fire1ScreenParams } from './Fire1Screen';
import { Fire2ScreenParams } from './Fire2Screen';

export type Tab1StackParamList = Readonly<{
    Fire1Screen: Fire1ScreenParams;
    Fire2Screen: Fire2ScreenParams;
    // ExampleScreen: ExampleScreenParams;
    // NestedNav: NavigatorScreenParams<NestedParamList>;
}>;

const Stack = createStackNavigator<Tab1StackParamList>();

export function Tab1StackNav() {
    return (
        // API: https://bit.ly/3v8FPox
        <Stack.Navigator>
            <Stack.Screen name="Fire1Screen" component={Fire1Screen} />
        </Stack.Navigator>
    );
};