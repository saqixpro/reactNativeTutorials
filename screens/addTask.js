import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AddTask = (props) => {
  return (
    <View style={styles.container}>
      <Text>Add New Task</Text>
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
