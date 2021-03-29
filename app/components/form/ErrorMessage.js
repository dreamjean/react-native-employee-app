import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

import { colors } from "../../constants";

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;

  return <Text style={styles.text}>{error}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.danger,
    fontSize: 12,
    marginVertical: 3,
  },
});

export default ErrorMessage;
