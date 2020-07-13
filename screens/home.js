import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>Welcome {props.user.username}</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({ user: state.user });

const mapDispatchToProps = (dispatch) => ({});

const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectComponent(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
