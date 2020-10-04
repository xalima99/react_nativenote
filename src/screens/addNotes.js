import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import {
  Text,
  Button,
  TextInput,
  IconButton,
  Colors,
  FAB,
} from "react-native-paper";
import { addNote, editNote } from "../redux/actions/notesActions";
import { useDispatch } from "react-redux";

import Header from "../components/Header";

const addNotes = ({ navigation }) => {
  const dispatch = useDispatch();
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  useEffect(() => {
    if (navigation.state?.params?.id) {
      settitle(navigation.state.params.title);
      setdescription(navigation.state.params.description);
    }
  }, []);



  const onSaveNote = () => {
    if(!navigation.state?.params?.id){
      dispatch(addNote({ title, description, id: Date.now() }));
    } else {
      dispatch(editNote({title, description, id: navigation.state.params.id}))
    }
    
    navigation.navigate('ViewNotes');
  };
  return (
    <>
      <Header titleText="Add New Note" />
      <IconButton
        icon="close"
        size={25}
        color="white"
        onPress={() =>
          navigation.state?.params?.id
            ? navigation.navigate("ViewNotes")
            : navigation.goBack()
        }
        style={styles.iconButton}
      />
      <View style={styles.container}>
        <TextInput
          label="Add Note Title Here"
          value={title}
          mode="outlined"
          onChangeText={settitle}
          style={styles.title}
        />
        <TextInput
          label="Add Note Description"
          value={description}
          mode="flat"
          onChangeText={setdescription}
          style={styles.text}
          scrollEnabled
          multiline
          returnKeyLabel="done"
          blurOnSubmit
        />
        <FAB
          style={[
            styles.fab,
            { backgroundColor: title === "" ? null : "#219653" },
          ]}
          small
          icon="check"
          disabled={title === "" ? true : false}
          onPress={onSaveNote}
        />
        <View style={styles.titleContainer}>
          <Text>Add Notes Modal Screen</Text>
        </View>
      </View>
    </>
  );
};

export default addNotes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  iconButton: {
    backgroundColor: "#219653",
    position: "absolute",
    right: 0,
    top: 35,
    margin: 20,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  text: {
    height: 300,
    fontSize: 16,
  },
  fab: {
    position: "absolute",
    zIndex: 1,
    bottom: 25,
    right: 10,
    // backgroundColor: "#219653",
  },
});
