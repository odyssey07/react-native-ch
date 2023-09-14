import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import colors from '../theme/colors';

const Header = ({title="Home"}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: colors.sat,
        fontSize: 32
    },
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: colors.dark,
        paddingVertical: 20, 
        marginTop: 30
    }
})

export default Header