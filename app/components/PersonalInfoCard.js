import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Card } from "react-native-paper";

function PersonalInfoCard({ name, subtitle, onPress }) {
  return (
    <Card style={styles.cardContainer} {...{ onPress }}>
      <Card.Title
        title={name}
        titleStyle={styles.title}
        subtitle={subtitle}
        subtitleStyle={styles.subtitle}
        leftStyle={styles.left}
        left={(props) => (
          <Avatar.Image
            {...props}
            size={60}
            source={{
              uri:
                "https://unsplash.com/photos/rDEOVtE7vOs/download?force=true&w=640",
            }}
          />
        )}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 5,
    padding: 5,
  },
  left: {
    marginRight: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: -5,
  },
  subtitle: {
    fontSize: 14,
  },
});

export default PersonalInfoCard;
