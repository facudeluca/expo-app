import React from "react";
import { Text, View, Modal, Pressable, StyleSheet } from "react-native";

export default function ClearModal({
  isModalVisible,
  clearList,
  setIsModalVisible,
}) {
  return (
    <Modal visible={isModalVisible} animationType="slide" transparent={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text>¿Estás seguro que deseas eliminar la lista?</Text>
          <View style={styles.modalBtns}>
            <Pressable onPress={() => clearList()}>
              <Text>SI</Text>
            </Pressable>
            <Pressable onPress={() => setIsModalVisible(false)}>
              <Text>NO</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap:30,
    borderColor:'#5f9ea0',
    borderWidth:2,
  },
  modalBtns:{
    flexDirection:'row',
    width:150,
    justifyContent:'space-around'
  },
});
