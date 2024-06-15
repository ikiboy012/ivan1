import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Tab1Screen } from './Tab1Screen';
import { Tab2Screen, Tab2ScreenParams } from './Tab2Screen';

export type BottomTabsParamList = {
    Tab2Screen: Tab2ScreenParams;

    // ExampleScreen: ExampleScreenParams;
    // NestedNav: NavigatorScreenParams<NestedParamList>;
};

const BottomTabs = createBottomTabNavigator<BottomTabsParamList>();

export function RootTabNav() {
    return (
        // API: https://bit.ly/3FN6HPL
        <BottomTabs.Navigator
        // initialRouteName="..."
        >
            {/* <View /> <-- REMOVE THIS */}
            {/* <BottomTabs.Screen name="ExampleScreen" component={ExampleScreen} /> */}

            <BottomTabs.Screen name="Tab2Screen" component={Tab2Screen} />
            {/* <BottomTabs.Screen name="Tab1" component={Tab1Screen} /> */}

        </BottomTabs.Navigator>
    );
};