import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../constants/colors";

const CustomButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={{...styles.button, ...props.styles}}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center'
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default CustomButton;
