import { SimpleLineIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Linking, Platform, Pressable, StyleSheet, View } from "react-native";
import { Avatar, Button, Card, List } from "react-native-paper";

import { colors } from "../constants";

function ProfileScreen({ navigation, route }) {
  const { name, email, salary, phone, photo, profession } = route.params;

  const listItems = [
    {
      title: email,
      icon: "email",
      linking: `mailto:${email}`,
    },
    {
      title: phone,
      icon: "phone",
      linking:
        Platform.OS === "android" ? `tel:${phone}` : `telprompt:${phone}`,
    },
    {
      title: salary,
      icon: "currency-usd",
    },
  ];

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.darkBlue, colors.lightBlue]}
        style={styles.linear}
      />
      <Pressable
        style={({ pressed }) => ({
          position: "absolute",
          top: 30,
          left: 18,
          opacity: pressed ? 0.5 : 1,
        })}
        onPress={() => navigation.goBack()}
      >
        <SimpleLineIcons
          name="arrow-left-circle"
          size={32}
          color={colors.white}
        />
      </Pressable>
      <View style={styles.imgContainer}>
        <Avatar.Image
          size={100}
          source={{
            uri: photo,
          }}
        />
      </View>
      <Card.Title
        style={styles.titleContainer}
        title={name}
        titleStyle={styles.title}
        subtitle={profession}
        subtitleStyle={styles.subtitle}
      />
      <List.Section style={styles.setion}>
        {listItems.map((item) => (
          <List.Item
            key={item.title}
            title={item.title}
            style={styles.listItem}
            onPress={() => Linking.openURL(item.linking)}
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
      </List.Section>
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
  setion: {
    padding: 10,
  },
  listItem: {
    backgroundColor: colors.white,
    padding: 0,
    margin: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  buttonLabel: {
    color: colors.white,
  },
});

export default ProfileScreen;
