import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    color: "#87ceeb",
    fontSize: 33
  },
  text: {
    color: "#87ceeb"
  },
  link: {
    marginTop: 15,
    color: "#87ceeb",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#87ceeb"
  },
  playButton: {
    marginVertical: 25,
    color: "#fff",
    padding: 10,
    padding: 10,
    borderRadius: 5,
    borderColor: "#fff",
    borderWidth: 1
  },
  dice: {
    height: 100,
    width: 100
  },
  diceContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});

const Dice = () => {
  const [currentImage1, setCurrentImage1] = useState({
    uri: require("../../src/images/dice1.png")
  });

  const onRoll = () => {
    const randomInt = Math.floor(Math.random() * 6) + 1;

    switch (randomInt) {
      case 1:
        setCurrentImage1({ uri: require("../../src/images/dice1.png") });
        break;
      case 2:
        setCurrentImage1({ uri: require("../../src/images/dice2.png") });
        break;
      case 3:
        setCurrentImage1({ uri: require("../../src/images/dice3.png") });
        break;
      case 4:
        setCurrentImage1({ uri: require("../../src/images/dice4.png") });
        break;
      case 5:
        setCurrentImage1({ uri: require("../../src/images/dice5.png") });
        break;
      case 6:
        setCurrentImage1({ uri: require("../../src/images/dice6.png") });
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dice</Text>
      <View style={styles.diceContainer}>
        <Image source={currentImage1.uri} style={styles.dice} />
      </View>
      <TouchableOpacity onPress={onRoll}>
        <Text style={styles.playButton}>Roll the dice</Text>
      </TouchableOpacity>

      <Link to={"/"}>
        <Text style={styles.link}>back to /home</Text>
      </Link>
    </View>
  );
};

export default Dice;
