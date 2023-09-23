import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import colors from '../theme/colors'

function toTitle(phrase) {
    return phrase
        .split('-')
        .map(word => word[0].toUpperCase()+word.slice(1))
        .join(' ')
}

const CategoryItem = ({ category, navigation }) => {
    return (
        <Pressable style={s.container} onPress={() => {navigation.navigate("products", { category})}}>
            <View style={s.iconContainer}>
                <Text style={s.icon}>{category.icon}</Text>
            </View>
            <Text style={s.title}>{toTitle(category.name)}</Text>
        </Pressable>
    )
}

const s = StyleSheet.create({  
    container: {
        flexDirection: 'row',
        backgroundColor: colors.sat,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 8,
        marginTop: 10,
        width: '80%',
        alignSelf: 'center',
        borderRadius: 15
    },
    title: {
        fontSize: 20,
        color: colors.dark,
        marginLeft: 10,
    },
    iconContainer: {
        backgroundColor: colors.dark,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        fontSize: 18
    }
})


export default CategoryItem