import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Contacts from "./screens/bottomTabs/Contacts";
import About from "./screens/bottomTabs/About";
import Messages from "./screens/bottomTabs/Message";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Contact"
        component={Contacts}
        options={{
          tabBarIcon: () => (
            <AntDesign name="contacts" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: () => (
            <AntDesign name="infocirlceo" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="message" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
