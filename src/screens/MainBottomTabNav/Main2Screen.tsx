import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MainBottomTabParamList } from '.';
import { RootStackParamList } from '../RootStackNav';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

export type Main2ScreenParams = {
    param1: number;
} | undefined;

type Props = CompositeScreenProps<
    BottomTabScreenProps<MainBottomTabParamList, 'Main2Screen'>,
    StackScreenProps<RootStackParamList>
>;

// type Props = BottomTabScreenProps<BottomTabsParamList, ''>;


// FOR NESTED NAVS: https://bit.ly/3YFxLcx
// type Props = CompositeScreenProps<
//     BottomTabScreenProps<BottomTabsParamList, 'ExampleScreen'>,
//     StackScreenProps<RootParamList>
// >;

export function Main2Screen(props: Props) {

    // SCREEN OPTIONS: https://bit.ly/3hEwUIy
    useEffect(() => {
        props.navigation.setOptions({
            title: 'Main2 Title',
            tabBarLabel: 'Main2',
            headerShown: false,
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
                    Main2 Screen
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