import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Settings = ({ navigation }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Settings</Text>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ padding: 16, backgroundColor: "tomato" }}
      >
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
