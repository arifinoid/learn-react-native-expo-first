import React from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "#fff"
  }
});

const Name = ({ name }) => {
  return <Text style={styles.text}>{name}</Text>;
};

export default Name;
