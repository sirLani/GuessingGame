import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Image
        source={require("../assets/splash.png")}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "40%",
    alignSelf: "center",
    height: 300,
  },
});

export default GameOver;
