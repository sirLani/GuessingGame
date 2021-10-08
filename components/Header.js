import React from "react";
import { View ,StyleSheet, Text} from "react-native";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'blue'
  },
  headerTitle: {
    fontSize: 16,
    color: 'white'
  },
});

export default Header;
