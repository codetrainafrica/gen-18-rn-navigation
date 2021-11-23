import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Settings from "./screens/Settings";
import Details from "./screens/Details";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerLeft: () => {
              return (
                <View style={{ backgroundColor: "red", padding: 16 }}></View>
              );
            },
          }}
        />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
