import React, { useEffect } from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { StackScreenProps } from '@react-navigation/stack';
import { useEdgesPerOrientation } from '../lib/orientation';
import type { RootStackParamList } from './RootStackNav';

export type AboutScreenParams = {
    param1: number;
} | undefined;

type Props = StackScreenProps<RootStackParamList, 'AboutScreen'>;

// FOR NESTED NAVS: https://bit.ly/3YFxLcx
// type Props = CompositeScreenProps<
//     StackScreenProps<StackParamList, 'ExampleScreen'>,
//     StackScreenProps<RootParamList>
// >;

export function AboutScreen(props: Props) {
    const edges = useEdgesPerOrientation();

    // SCREEN OPTIONS: https://bit.ly/3jiMJVJ
    useEffect(() => {
        props.navigation.setOptions({
            title: 'About Naslov',
            headerTintColor: 'black',
            headerBackTitleVisible: false,
            // headerLeft: (headerProps) => {
            //     return (
            //         <Icon name="menu" size={22} color={headerProps.tintColor} style={{ marginLeft: 10 }} />
            //     );
            // },
            // headerRight: (headerProps) => {
            //     return (
            //         <Icon name="plus" size={22} color={headerProps.tintColor} style={{ marginRight: 10 }} />
            //     );
            // },
        });
    }, [props.navigation]);

    return (
        <SafeAreaView edges={edges} style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container} style={{ flex: 1 }}>
                <Text>
                    About screen
                </Text>
                <Button
                    title='TAB NAVIGATION'
                    onPress={() => {
                        props.navigation.navigate('MainBottomTabNav', { screen: 'Main1Screen' })
                    }} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
});