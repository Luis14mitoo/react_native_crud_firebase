import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import UserList from "./screens/UserList";
import CreateUserScreen from "./screens/CreateUserScreen";
import UserDetailsScreen from "./screens/UserDetailsScreen";

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserList"
        component={UserList}
        option={{ title: "usert list" }}
      />
      <Stack.Screen
        name="CreateUserScreen"
        component={CreateUserScreen}
        option={{ title: "Create a new User" }}
      />
      <Stack.Screen
        name="UserDetailsScreen"
        component={UserDetailsScreen}
        option={{ title: "User detail" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
