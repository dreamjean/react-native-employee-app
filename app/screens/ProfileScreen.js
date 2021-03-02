import React from "react";
import { StyleSheet, Text, View } from "react-native";

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>on boarding Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfileScreen;
