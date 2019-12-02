import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Link } from "react-router-native";
import Name from "../components/Name";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center"
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  input: {
    marginTop: 10,
    height: 50,
    width: 200,
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    borderColor: "#23abab",
    color: "#fff"
  },
  text: {
    marginTop: 10,
    fontSize: 25,
    color: "#fff"
  },
  link: {
    marginTop: 15,
    color: "#87ceeb",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#87ceeb"
  }
});

const answers = [
  "santuy dongs",
  "asu i",
  "hilih kintil",
  "diem bgst",
  "apa lu bambang?!"
];

const Home = () => {
  const [text, setText] = useState(" ");
  const [answer, setAnswer] = useState(null);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../src/images/sketch-minify.jpg")}
        style={styles.image}
      />
      <Name name="Arifinoid ⚘" />
      <TextInput
        placeholderTextColor="#7b8788"
        placeholder="Say something lit to me..."
        onChangeText={text => setText(text)}
        style={styles.input}
      />

      <Button
        title="See my answer.."
        onPress={() => {
          const result = Math.floor(Math.random() * answers.length);

          setAnswer(answers[result]);
        }}
      />
      {text !== null && <Text style={styles.text}>You: '{text}'</Text>}
      {answer && <Text style={styles.text}>Arifinoid: '{answer}'</Text>}

      <Link to={"/dice"}>
        <Text style={[styles.text, styles.link]}>Go to /dice</Text>
      </Link>
    </View>
  );
};

export default Home;
