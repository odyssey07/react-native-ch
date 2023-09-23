import { View } from 'react-native'
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './src/screens/Home'
import Products from './src/screens/Products'
import ProductDetail from './src/screens/ProductDetail'

const Stack = createNativeStackNavigator();

export default function App() {
    // const myTime = new Date;
    // console.log(`App.js ${myTime.getHours()}:${myTime.getMinutes()}:${myTime.getSeconds()}`)

    const [fontsLoaded] = useFonts({
        manrope: require("./assets/fonts/manrope-variableweight.ttf")
    });

    if (!fontsLoaded) {
        return;
    }

    return (
        <NavigationContainer style={{ flex: 1 }}>
            <Stack.Navigator initialRouteName='home' screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen component={Home} name='home'/>
                <Stack.Screen component={Products} name='products' />
                <Stack.Screen component={ProductDetail} name='productDetail'/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

/* 
<View style={{ flex: 1 }}>
    <Home />
    <Products category='smartphones' />
    <ProductDetail />
</View>
*/