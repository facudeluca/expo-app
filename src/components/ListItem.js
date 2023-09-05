import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const ListItem = ({ item, list, setList }) => {
  const [isChecked, setIsChecked] = useState();

  return (
    <View style={styles.listContainer}>
      <Pressable
        onPress={() => setIsChecked(!isChecked)}
        style={styles.listItem}
      >
        <Text opacity={isChecked?.3:1}>{item.text}</Text>
        <View style={styles.circleCheck}backgroundColor={isChecked?'':'white'}>
          <Ionicons name="checkmark-outline" size={15} color={"green"} opacity={isChecked?10:0}></Ionicons>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer:{
    width:'100%',
    padding:5,
    marginTop:20,    
    gap:5,
  },
  listItem: {
    fontSize: 25,
    width: 250,
    height: 55,
    padding: 15,
    backgroundColor: "#f8f8ff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  circleCheck:{
    borderRadius:50,
    borderWidth:1,
    borderColor:'#5f9ea0',
    padding:3,
  }

});

export default ListItem;
