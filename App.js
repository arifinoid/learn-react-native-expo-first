import React from "react";
import { StyleSheet, View } from "react-native";
import { Routes } from "./src/Routes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    paddingTop: 60
  }
});

const App = () => {
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  );
};

export default App;
