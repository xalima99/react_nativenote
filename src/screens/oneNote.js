import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, IconButton, FAB } from "react-native-paper";
import { useDispatch } from "react-redux";

import Header from "../components/Header";

const oneNote = ({ navigation }) => {
  return (
    <>
      <Header titleText="Note Page" />
      <IconButton
        icon="close"
        size={25}
        color="white"
        onPress={() => navigation.goBack()}
        style={styles.iconButton}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{navigation.state.params.title}</Text>
        <Text style={styles.description}>
          {navigation.state.params.description}
        </Text>
        <FAB
          style={styles.fab}
          small
          icon="pen"
          label="Edit My Note"
          onPress={() => navigation.navigate("addNotes", navigation.state.params)}
        />
      </View>
    </>
  );
};

export default oneNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  iconButton: {
    backgroundColor: "#219653",
    position: "absolute",
    right: 0,
    top: 35,
    margin: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
    textTransform: "capitalize",
    color: "#219653",
  },
  description: {
    fontSize: 25,
  },
  fab: {
    position: "absolute",
    flex: 0.5,
    bottom: 25,
    right: 10,
    backgroundColor: "#219653",
  },
});
