import Constants from "expo-constants";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { FAB } from "react-native-paper";

import { PersonalInfoCard } from "../components";

const personalInfo = [
  {
    _id: 1,
    name: "Mukesh",
    email: "mukesh@domo.com",
    salary: "5 lpa",
    phone: "123",
    profession: "web dev",
    photo: "https://unsplash.com/photos/PrXsOoAYqgg/download?force=true&w=640",
  },
  {
    _id: 2,
    name: "Suresh",
    email: "suresh@domo.com",
    salary: "6 lpa",
    phone: "456",
    profession: "android dev",
    photo: "https://unsplash.com/photos/PrXsOoAYqgg/download?force=true&w=640",
  },
  {
    _id: 3,
    name: "Ramesh",
    email: "ramesh@domo.com",
    salary: "7 lpa",
    phone: "689",
    profession: "ml expert",
    photo: "https://unsplash.com/photos/PrXsOoAYqgg/download?force=true&w=640",
  },
];

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={personalInfo}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <PersonalInfoCard
            name={item.name}
            subtitle={item.profession}
            photo={item.photo}
            onPress={() => navigation.navigate("Profile", item)}
          />
        )}
      />
      <FAB
        style={styles.fab}
        small={false}
        icon="plus"
        onPress={() => navigation.navigate("EmployeeEdit")}
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
