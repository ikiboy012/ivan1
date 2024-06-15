import React, { useEffect } from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { StackScreenProps } from '@react-navigation/stack';
import { useEdgesPerOrientation } from '../lib/orientation';
import type { RootStackParamList } from './RootStackNav';

export type HomeScreenParams = {
    param1: number;
} | undefined;

type Props = StackScreenProps<RootStackParamList, 'HomeScreen'>;

// FOR NESTED NAVS: https://bit.ly/3YFxLcx
// type Props = CompositeScreenProps<
//     StackScreenProps<StackParamList, 'HomeScreen'>,
//     StackScreenProps<RootParamList>
// >;

export function HomeScreen(props: Props) {
    const edges = useEdgesPerOrientation();

    // SCREEN OPTIONS: https://bit.ly/3jiMJVJ
    useEffect(() => {
        props.navigation.setOptions({
            title: 'Home Title',
            // headerTintColor: 'black',
            headerBackTitleVisible: false,
            headerLeft: (headerProps) => {
                return (
                    <Icon2 name="bag-handle-sharp" size={22} color={headerProps.tintColor} style={{ marginLeft: 10 }} />
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
        <SafeAreaView edges={edges} style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container} style={{ flex: 1 }}>
                <Text>
                    Home screen
                </Text>
                <Button
                    title='About'
                    onPress={() => {
                        props.navigation.navigate("AboutScreen", { param1: 12 });
                    }}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
});