import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "./components/Header";
import GameOver from "./screens/gameover";
import GameScreen from "./screens/GameScreen";
import StartGamesScreen from "./screens/StartGamesScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0)

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0)
  };

  const gameOverHandler = numOfRounds =>{
    setGuessRounds(numOfRounds)
  }

  let content = <StartGamesScreen onstartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  }else if(guessRounds > 0){
    content = <GameOver/>
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
