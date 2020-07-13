import React from "react";
import { Text, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width } = Dimensions.get("screen");

const Button = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={{ fontSize: 18, color: "white", fontWeight: "600" }}>
      {props.text}
    </Text>
  </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(81,135,200,1)",
    padding: 10,
    borderWidth: 0,
    width: width / 1.1,
    alignItems: "center",
    borderRadius: 20,
  },
});
