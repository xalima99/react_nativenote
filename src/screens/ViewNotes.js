import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Text, FAB, List } from "react-native-paper";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import { deleteNote } from "../redux/actions/notesActions";

const ViewNotes = ({ navigation }) => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.note);

  return (
    <>
      <Header titleText="Simple Note Taking App" />
      <View style={styles.container}>
        {notes.length === 0 ? (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>You do not have any notes</Text>
          </View>
        ) : (
          <FlatList
            data={notes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <ListItem
                  onPress={() => navigation.navigate("oneNote", item)}
                  item={item}
                  renderRightActions={() => (
                    <ListItemDeleteAction
                      onPress={() => dispatch(deleteNote(item.id))}
                      onEdit={() => navigation.navigate("addNotes", item)}
                    />
                  )}
                />
              );
            }}
          />
        )}

        <FAB
          style={styles.fab}
          small
          icon="plus"
          label="add New note"
          onPress={() => navigation.navigate("addNotes")}
        />
      </View>
    </>
  );
};

export default ViewNotes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
  fab: {
    position: "absolute",
    flex: 0.5,
    bottom: 25,
    right: 10,
    backgroundColor: "#219653",
  },
  listTitle: {
    fontSize: 20,
  },
});
