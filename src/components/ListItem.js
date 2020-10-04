import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { List } from "react-native-paper";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { TouchableOpacity } from "react-native-gesture-handler";

const ListItem = ({ item, renderRightActions,onPress }) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity onPress={onPress}>
        <List.Item
          title={item.title}
          description={item.description}
          descriptionNumberofLines={1}
          titleStyle={styles.listTitle}
        />
      </TouchableOpacity>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({});
