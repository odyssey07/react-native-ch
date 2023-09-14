import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../theme/colors'

const ProductItem = ({title, brand}) => {
    return (
        <View style={s.container}>
            <Text style={s.title}>{title}</Text>
            <View style={s.brandContainer}>
                <Text style={s.brand}>{brand}</Text>
            </View>
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.light,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 8,
        marginBottom: 10,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 8,
        // flexWrap: 'wrap'
        borderColor: colors.lightDark,
        borderWidth: 1
    },
    title: {
        width: 195,
        fontSize: 16
    },
    brandContainer: {
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: colors.mid,  
    },
    brand: {    
        fontSize: 12,
        paddingVertical: 5,
        paddingHorizontal: 8,
        textAlign: 'center',
        color: 'white',
        
    }
})

export default ProductItem