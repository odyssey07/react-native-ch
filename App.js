import { View } from 'react-native';
import Home from './src/screens/Home';
import Products from './src/screens/Products';

export default function App() {
    return (
        <View style={{flex: 1}}>
            {/* <Home/> */}
            <Products category='laptops'/>
        </View>
    );
};