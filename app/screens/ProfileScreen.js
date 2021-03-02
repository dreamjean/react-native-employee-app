import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Button, Card, List } from "react-native-paper";

import { colors } from "../constants";

const listItems = [
  {
    title: "abc@abc.com",
    icon: "email",
  },
  {
    title: "123456",
    icon: "phone",
  },
  {
    title: "8 LPA",
    icon: "currency-usd",
  },
];

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.darkBlue, colors.lightBlue]}
        style={styles.linear}
      />
      <View style={styles.imgContainer}>
        <Avatar.Image
          size={100}
          source={{
            uri:
              "https://unsplash.com/photos/PrXsOoAYqgg/download?force=true&w=640",
          }}
        />
      </View>
      <Card.Title
        style={styles.titleContainer}
        title="Ramesh verma"
        titleStyle={styles.title}
        subtitle="web developer"
        subtitleStyle={styles.subtitle}
      />
      {listItems.map((item) => (
        <List.Item
          key={item.title}
          title={item.title}
          style={styles.listItem}
          left={(props) => (
            <List.Icon
              {...props}
              color={colors.primary}
              style={{ marginRight: 4 }}
              icon={item.icon}
            />
          )}
        />
      ))}
      <View style={styles.buttonContainer}>
        <Button
          labelStyle={styles.buttonLabel}
          icon="account-edit"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Edit
        </Button>
        <Button
          labelStyle={styles.buttonLabel}
          icon="delete"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Fire employee
        </Button>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linear: {
    height: "20%",
  },
  imgContainer: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    marginTop: -55,
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: colors.orange,
  },
  titleContainer: {
    alignItems: "center",
    padding: 10,
  },
  title: {
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 15,
  },
  card: {
    margin: 3,
  },
  listItem: {
    backgroundColor: colors.white,
    padding: 0,
    margin: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30,
  },
  buttonLabel: {
    color: colors.white,
  },
});

export default ProfileScreen;
