import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';

const Home = () => {
    return (
        <View style={s.container}>
            <Header title='Categories'/>
            <Categories/>            
        </View>
    );
};

const s = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Home