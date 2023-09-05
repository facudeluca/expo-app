import { View, StyleSheet, TextInput, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function AddItem({ text, setText, addItem }) {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Escriba aquí..."
          style={styles.input}
          value={text}
          onChangeText={(value) => setText(value)}
        />
        <Pressable style={styles.button} onPress={() => addItem()}>
          <Ionicons name="add-circle-outline" size={35} color={"#5f9ea0"} />
        </Pressable>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  input: {
    padding: 5,
    fontSize: 18,
    width: 180,
  },
  inputContainer: {
    marginTop: 20,
    borderRadius: 30,
    paddingVertical:10,
    paddingLeft:5,
    paddingRight:0,
    borderWidth:1,
    borderColor:'#5f9ea0',
    flexDirection:'row',
    justifyContent:"center",
    alignItems:"center",
    width:'70%',
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
});
