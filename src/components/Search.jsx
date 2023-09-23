import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import colors from '../theme/colors';

const Search = ({text, setText}) => {
    return (
        <View style={s.container}>
            <TextInput 
                style={s.text}
                placeholder='Search...'
                onChangeText={value => setText(value)}
                value={text}
            />
            <Pressable onPress={() => {setText('')}}>
                <AntDesign name="closecircle" size={24} color={colors.dark} />
            </Pressable>
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 40,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderColor: colors.dark,
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10
    },
    text: {
        fontSize: 16,
        fontFamily: 'manrope',
        // backgroundColor: 'red'
    }
})

export default Search