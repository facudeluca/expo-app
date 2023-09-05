import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  ViewComponent,
  FlatList,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AddItem from "./src/components/AddItem";
import ListItem from "./src/components/ListItem";
import ClearModal from "./src/components/ClearModal";

export default function App() {
  const [text, setText] = useState("");

  const [list, setList] = useState([]);

  const addItem = () => {
    list.push({
      id: Math.random(),
      text: text,
    });
    setList(list);
    setText("");
  };
  const [isModalVisible, setIsModalVisible] = useState(false)

  const clearList =()=>{
    setList([]);
    setIsModalVisible(false);
  }

  return (
    <View style={styles.container}>

      <ClearModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} clearList={clearList}/>
    
      <Text style={styles.titulo}>Lista de compras</Text>

      <AddItem text={text} setText={setText} addItem={addItem}/>

      <FlatList style={styles.listContainer}
        data={list}
        renderItem={({ item }) => (
          <ListItem item={item} list={list} setList={setList}/>
        )
        }
        keyExtractor={(item) => item.id}
      />

      <Pressable style={styles.button} onPress={()=>setIsModalVisible(true)}>
        <Ionicons name="trash" size={40} color={"white"} style={styles.trash}/>
      </Pressable>
    </View>

    
  );
}

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    height:'100%',
    paddingBottom:10,
    paddingTop:10,
    backgroundColor:'#f8f8ff'

  },
  titulo: {
    marginTop: 40,
    fontSize: 30,
  },
  trash:{
    backgroundColor:'#5f9ea0',
    padding:10,
    borderRadius:50,
  }
});
