import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Details = (props) => {
  const { item, fufu } = props.route.params;
  console.log(item, fufu);
  return <View>{/* <Text>{name}</Text> */}</View>;
};

export default Details;

const styles = StyleSheet.create({});
