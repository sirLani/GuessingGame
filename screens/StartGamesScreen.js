import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/card";
import Colors from "../constants/colors";
import Input from "../components/input.js";
import NumberContainer from "../components/NUmberContainer";
import CustomButton from "../components/customButton";

const StartGamesScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (enteredValue) => {
    setEnteredValue(enteredValue.replace(/[^0-9]/g, ""));
  };

  const resetInputHandle = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandle = () => {
    const chosenNumber = parseInt(enteredValue);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandle }]
      );
      return;
    }
    setConfirmed(true);

    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <CustomButton onPress={() => props.onstartGame(selectedNumber)}>
          Start Game
        </CustomButton>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Select a number</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <CustomButton styles={styles.button} onPress={resetInputHandle}>
              Reset
            </CustomButton>

            <CustomButton styles={styles.button} onPress={confirmInputHandle}>
              Confirm
            </CustomButton>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "OpenSans-Bold",
  },

  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 15,
  },
  button: {
    width: 115,
  },

  input: {
    width: 50,
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default StartGamesScreen;
