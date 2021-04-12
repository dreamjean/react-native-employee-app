import Constants from "expo-constants";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { FAB } from "react-native-paper";

import { PersonalInfoCard } from "../components";

function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    fetch("http://192.168.0.21:3000/api/employees")
      .then((res) => res.json())
      .then((result) => {
        setLoading(true);
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        alert("Something went wrong.");
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <PersonalInfoCard
            name={item.name}
            subtitle={item.position}
            photo={item.picture}
            onPress={() => navigation.navigate("Profile", item)}
          />
        )}
        onRefresh={fetchData}
        refreshing={loading}
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
