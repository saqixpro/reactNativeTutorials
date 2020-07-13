import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import * as Screens from "./screens/index";
const { Screen, Navigator } = createStackNavigator();
import { Provider } from "react-redux";
import store from "./store/store";
const App = (props) => (
  <Provider store={store}>
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="welcome" component={Screens.Welcome} />
        <Screen name="home" component={Screens.Home} />
        <Screen name="addTask" component={Screens.AddTask} />
      </Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
