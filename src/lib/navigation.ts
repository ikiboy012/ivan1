import React, { useState } from 'react';
import queryString from 'query-string';
import { NavigationAction, NavigationContainerRef, NavigationState, getPathFromState } from '@react-navigation/native';
import { RootStackParamList } from '../screens/RootStackNav';

/**
 * Use navigationRef to access "navigation" from anywhere.
 * 
 * Read more [here](https://bit.ly/3WrjDl2)
 * 
 * ## Usage
 * 
 * ```
 * navigationRef.current?.navigate('UserStackNav', { screen: 'HomeScreen' })
 * navigationRef.current?.dispatch(DrawerActions.toggleDrawer());
 * ```
 */
export const navigationRef = React.createRef<NavigationContainerRef<RootStackParamList>>();

/**
 * Get current screen and its params.
 */
export function getCurrentScreen() {
    const rootState = navigationRef.current?.getRootState();

    if (rootState) {
        const navPath = getPathFromState(rootState);
        const parts = queryString.parseUrl(navPath);
        return {
            query: parts.query,
            url: parts.url,
        };
    }

    return null;
}

/**
 * Init navigation.
 */
export function useInitNavigation() {
    const [isNavigationReady, setIsNavigationReady] = useState(false);

    function onNavReady() {
        setIsNavigationReady(true);
    }

    function onNavStateChange(navState: NavigationState | undefined) {
        // console.log('On nav state change', JSON.stringify(navState, null, 4));
    }

    function onUnhandledNavAction(action: NavigationAction) {
        // console.log('On unhandled nav action', JSON.stringify(action, null, 4));
    }

    return {
        isNavigationReady,
        onNavReady,
        onNavStateChange,
        onUnhandledNavAction,
    }
}