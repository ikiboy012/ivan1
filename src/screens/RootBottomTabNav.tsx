import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab2Screen, Tab2ScreenParams } from './Tab2Screen';
import { NavigatorScreenParams } from '@react-navigation/native';
import { Tab1StackNav, Tab1StackParamList } from './Tab1StackNav';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export type RootBottomTabParamList = {
    Tab1StackNav: NavigatorScreenParams<Tab1StackParamList>;
    Tab2Screen: Tab2ScreenParams;

    // ExampleScreen: ExampleScreenParams;
    // NestedNav: NavigatorScreenParams<NestedParamList>;
};

const BottomTabs = createBottomTabNavigator<RootBottomTabParamList>();

export function RootTabNav() {
    return (
        // API: https://bit.ly/3FN6HPL
        <BottomTabs.Navigator>
            <BottomTabs.Screen
                name="Tab1StackNav"
                component={Tab1StackNav}
                options={{
                    headerShown: false,
                    title: "Tab1",
                    tabBarIcon: ({ color, size, focused }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    )
                }}
            />
            <BottomTabs.Screen
                name="Tab2Screen"
                component={Tab2Screen}
                options={{
                    headerShown: false,
                    title: "Tab2",
                    tabBarIcon: ({ color, size, focused }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    )
                }} />
        </BottomTabs.Navigator>
    );
};