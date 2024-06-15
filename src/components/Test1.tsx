import { useNavigation, useTheme } from '@react-navigation/native';
import { ReactNode } from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle, Button } from 'react-native';
import { navigationRef } from '../lib/navigation';

export type Test1Props = Readonly<{
    style?: StyleProp<ViewStyle>;
    children?: ReactNode;
}>

export function Test1(props: Test1Props) {
    const navigation = useNavigation();
    const { colors } = useTheme();

    return (
        <View style={[styles.container, props.style]}>
            <Text style={{ fontSize: 20, backgroundColor: colors.card, padding: 15 }}>
                Hello from Test1
            </Text>
            <Button title='Test1' onPress={() => {
                // navigation.goBack();
                navigationRef.current?.goBack();
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
});

Test1.displayName = 'Test1';