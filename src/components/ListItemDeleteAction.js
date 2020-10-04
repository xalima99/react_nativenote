import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const ListItemDeleteAction = ({ onPress, onEdit }) => {
  return (
    <>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
          <MaterialCommunityIcons name="trash-can" size={30} color="white" />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={onEdit}>
        <View style={styles.container1}>
          <MaterialCommunityIcons name="pen" size={30} color="white" />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default ListItemDeleteAction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    borderRadius: 5,
    marginHorizontal: 5
  },
  container1: {
    backgroundColor: "dodgerblue",
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    borderRadius: 5,
    marginHorizontal: 5
  }

});
