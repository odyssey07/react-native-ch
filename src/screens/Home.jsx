import { View, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import categories from '../data/categories'
import CategoryItem from '../components/CategoryItem'

const Home = ({ navigation }) => {
    return (
        <View style={s.container}>
            <Header title='Categories' />
            <View style={s.container}>
                <FlatList
                    data={categories}
                    keyExtractor={(key) => { return key.name }}
                    renderItem={({ item }) => <CategoryItem category={item} navigation={navigation}/>}
                />
            </View>
        </View>
    );
};

const s = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Home
