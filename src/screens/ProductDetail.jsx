import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { AntDesign } from '@expo/vector-icons'
import colors from '../theme/colors'

const ProductDetail = ({ route }) => {
    const { product: item } = route.params;

    return (
        <View>
            <Header title={item.title} />
            <View style={styles.container}>
                <Image
                    resizeMode='cover'
                    source={{ uri: item.images[0] }}
                    style={styles.image}
                />
                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>{item.description}</Text>
                    <Text style={styles.price}>${item.price}</Text>

                    <Pressable style={styles.button} onPress={() => console.log('comprar producto...')}>
                        <Text style={styles.text}> Buy ({item.stock} avilable) </Text>
                    </Pressable>

                    <View style={styles.ratingContainer}>
                        <AntDesign name="star" size={21} color="black" />
                        <Text style={styles.rating}> Rating: {item.rating} </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 280,
        width: '100%',
    },
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
    },

    descriptionContainer: {
        marginVertical: 10,
        paddingHorizontal: 20
    },
    title: {
        fontFamily: 'manrope',
        fontSize: 32
        // fontWeight: '700',
    },
    description: {
        fontSize: 16,
        // fontWeight: '500',
        marginTop: 6,
        fontFamily: 'manrope',
        // textAlign: 'right'
    },
    price: {
        marginTop: 10,
        fontSize: 31,
        fontFamily: 'manrope',
    },
    button: {
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: colors.dark,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'white',
        fontFamily: 'manrope',
    },
    rating: {
        marginLeft: 5,
        fontSize: 20,
        fontFamily: 'manrope',
    },
    ratingContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
})

export default ProductDetail