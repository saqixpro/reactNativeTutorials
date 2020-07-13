import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Components from "../components/index";
import { connect } from "react-redux";
import * as ActionTypes from "../store/actionTypes";
const Welcome = (props) => {
  const [name, setName] = useState("");

  const handleInput = () => {
    props.addUser(name);
    props.navigation.navigate("home");
  };

  return (
    <View style={styles.container}>
      <Text>Welcome {props.user.username}</Text>
      <Components.Input
        onChangeText={(text) => setName(text)}
        placeholder="What Should We Call You"
      />
      <Components.Button onPress={() => handleInput()} text="ENTER" />
    </View>
  );
};

const mapStateToProps = (state) => ({ user: state.user });

const mapDispatchToProps = (dispatch) => ({
  addUser: (username) =>
    dispatch({
      type: ActionTypes.ADD_USER,
      payload: {
        username,
      },
    }),
});

const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectComponent(Welcome);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
