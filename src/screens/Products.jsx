import { View, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import Header from '../components/Header';
import products from '../data/products';
import ProductItem from '../components/ProductItem';

function toTitle(phrase) {
    return phrase
        .split('-')
        .map(word => word[0].toUpperCase()+word.slice(1))
        .join(' ')
}

const Products = ({ route, navigation }) => {
    const [text, setText] = useState('');
    const [categoryProd, setCategoryProd] = useState([]);
    const [showingProd, setShowingProd] = useState([]);

    const category = route.params.category.name;

    useEffect(() => {
        setShowingProd(categoryProd);
        if(text) {
            const filterByTitleProd = categoryProd.filter(
                product => product.title.toLowerCase().includes(text.toLowerCase())
            )
            setShowingProd(filterByTitleProd)
        }
    }, [text, category]) 
    
    useEffect(() => {
        const filterByCategory = products.filter(product => product.category === category);
        setCategoryProd(filterByCategory);
        setShowingProd(filterByCategory);
    }, [category])

    return (
        <View style={s.container}>
            <Header title={toTitle(category)}/>
            <Search text={text} setText={setText}/>
            <View style={s.secondContainer}>
                <FlatList
                    data={showingProd}
                    keyExtractor={product => product.id}
                    renderItem={({item: product}) => 
                        <ProductItem
                            product={product}
                            navigation={navigation}
                        />
                    }
                />
            </View>
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1
    }, 
    secondContainer: {
        flex: 1
    }
})

export default Products