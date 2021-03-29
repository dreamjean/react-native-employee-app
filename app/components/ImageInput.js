import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import { Image, Platform, Pressable, StyleSheet, View } from "react-native";

import { colors } from "../constants";
import PermissionModal from "./PermissionModal";

function ImageInput({ image, onChangeImage }) {
  const [modelVisible, setModelVisitble] = useState(false);

  useEffect(() => {
    requestMediaLibraryPermission();
  }, []);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestMediaLibraryPermission = async () => {
    if (Platform.OS !== "web") {
      const {
        status,
      } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  const requestCameraPermission = async () => {
    if (Platform.OS !== "web") {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera permissions to make this work!");
      }
    }
  };

  const pickerImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });

      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error @pickImage", error);
    }

    setModelVisitble(false);
  };

  const pickerPhotograph = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });

      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error @pickImage", error);
    }

    setModelVisitble(false);
  };

  return (
    <>
      <Pressable
        style={{
          alignSelf: "center",
          justifyContent: "center",
          margin: 5,
        }}
        onPress={() => setModelVisitble(true)}
      >
        <View style={styles.container}>
          {image ? (
            <Image style={styles.image} source={{ uri: image }} />
          ) : (
            <Entypo name="plus" size={30} color={colors.lightBlue} />
          )}
        </View>
      </Pressable>
      <PermissionModal
        visible={modelVisible}
        onCloseModal={() => setModelVisitble(false)}
        onCameraRollPermission={pickerImage}
        onCameraPermission={pickerPhotograph}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: colors.light,
    borderRadius: 40,
    width: 80,
    height: 80,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;
