import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import type { BottomTabsParamList } from './RootTabNav';

export type Tab2ScreenParams = {
    param1: number;
} | undefined;

type Props = BottomTabScreenProps<BottomTabsParamList, 'Tab2Screen'>;


export function Tab2Screen(props: Props) {
    // SCREEN OPTIONS: https://bit.ly/3hEwUIy
    useEffect(() => {
        props.navigation.setOptions({
            title: 'Tab2 Title',
            tabBarLabel: 'Tab2',
            // tabBarActiveTintColor: colors?.onPrimary,
            // tabBarInactiveTintColor: colors?.onBackground,
            tabBarIcon: ({ color, size, focused }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
        });
    }, [props.navigation]);

    return (
        <SafeAreaView edges={['left', 'right']} style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container} style={{ flex: 1 }}>
                <Text>
                    Tab2 screen
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
});