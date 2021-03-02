import Constants from "expo-constants";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { FAB } from "react-native-paper";

import { PersonalInfoCard } from "../components";

const personalInfo = [
  {
    id: 1,
    name: "Mukesh",
    profession: "web dev",
  },
  {
    id: 2,
    name: "Suresh",
    profession: "android dev",
  },
  {
    id: 3,
    name: "Ramesh",
    profession: "ML expert",
  },
  {
    id: 4,
    name: "Hitesh",
    profession: "web dev",
  },
];

function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={personalInfo}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PersonalInfoCard name={item.name} subtitle={item.profession} />
        )}
      />
      <FAB
        style={styles.fab}
        small={false}
        icon="plus"
        onPress={() => console.log("Pressed")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default HomeScreen;
