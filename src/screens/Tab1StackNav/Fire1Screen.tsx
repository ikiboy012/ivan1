import React, { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { StackScreenProps } from '@react-navigation/stack';
import { CompositeScreenProps } from '@react-navigation/native';
import { Tab1StackParamList } from '.';
import { RootBottomTabParamList } from '../RootBottomTabNav';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type Fire1ScreenParams = {
    param1: number;
} | undefined;


// FOR NESTED NAVS: https://bit.ly/3YFxLcx
type Props = CompositeScreenProps<
    StackScreenProps<Tab1StackParamList, 'Fire1Screen'>,
    BottomTabScreenProps<RootBottomTabParamList>
>;

export function Fire1Screen(props: Props) {

    // SCREEN OPTIONS: https://bit.ly/3jiMJVJ
    useEffect(() => {
        props.navigation.setOptions({
            title: 'Fire1 Title',
            headerTintColor: 'black',
            headerBackTitleVisible: false,
            headerLeft: (headerProps) => {
                return (
                    <Icon name="menu" size={22} color={headerProps.tintColor} style={{ marginLeft: 10 }} />
                );
            },
            headerRight: (headerProps) => {
                return (
                    <Icon name="plus" size={22} color={headerProps.tintColor} style={{ marginRight: 10 }} />
                );
            },
        });
    }, [props.navigation]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container} style={{ flex: 1 }}>
                <Text>
                    Fire1 screen
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