/* import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */

import React, {useState} from 'react';
import { 
  StyleSheet, 
  Text, View,
  Pressable, 
  Image, FlatList
 } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AddItem from './src/AddItem';
import ListItem from './src/ListItem';
import CustomModal from './src/CustomModal';

export default function App() {

  const initialState = []
  const [text, setText] = useState("")
  const [list, setList] = useState(initialState)
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addItem = () => {
    list.push({
      id: Math.random(), 
      text: text,
      });
    setList(list);
    setText("");
  };

  const clearList = () => {
    setList([]);
    setIsModalVisible(false);
  }

  return (
    <View style={styles.container}>

      <Image style={styles.img} source={{uri: 'https://res.cloudinary.com/dews3zbls/image/upload/v1694053685/icons/icons8-list-64_jlsd88.png'}}/>
      
      <Text style={styles.titlx}>Lista de compras</Text>
      
      <AddItem text={text} setText={setText} addItem={addItem}/>

      <FlatList 
      data={list} 
      keyExtractor={item => item.id}
      renderItem={({item}) => <ListItem item={item}/>}>
      </FlatList>

      <CustomModal setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible} clearList={clearList} />

      <Pressable onPress={() => setIsModalVisible(true)}>
        <Ionicons name="ios-trash-outline" size={50} color="#009DFF" />
      </Pressable>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    rowGap: 20,
  },

  img: {
    width: 120,
    height: 120,
    marginTop: 50,
  },

  titlx: {
    fontSize: 30,
    borderBottomColor: '#009DFF',
    borderBottomWidth: 5,
  },
});

