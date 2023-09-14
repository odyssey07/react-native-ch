import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import categories from '../data/categories'
import CategoryItem from './CategoryItem'

const Categories = () => {
    console.log('Categories')
    return (
        <View style={s.container}>
            <FlatList
                data={categories}
                keyExtractor={(item) => { return item.name }}
                renderItem={({ item }) => <CategoryItem item={item}/>}
            />
            <View style={s.empty}></View>
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,        
    }
})

export default Categories