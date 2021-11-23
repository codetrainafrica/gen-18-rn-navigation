import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const { navigate } = useNavigation();

  const data = [
    { name: "Jon", age: 32, screenName: "Details" },
    { name: "Nana Addo", age: 32 },
    { name: "Messi", age: 32 },
    { name: "Ronaldo", age: 32 },
    { name: "Ole", age: 32 },
    { name: "Ted", age: 32 },
  ];
  return (
    <View>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Profile</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => {
          return index;
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigate(item.screenName, {
                item: item,
                fufu: true,
              })
            }
            style={{ padding: 16, backgroundColor: "gray" }}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
