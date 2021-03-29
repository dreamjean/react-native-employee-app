import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

import { colors } from "../constants";

function PermissionModal({
  visible,
  onCameraPermission,
  onCameraRollPermission,
  onCloseModal,
}) {
  return (
    <Modal {...{ visible }} animationType="slide" transparent>
      <View style={styles.modal}>
        <View style={styles.buttonsContainer}>
          <Button
            icon="camera"
            mode="contained"
            labelStyle={styles.label}
            onPress={onCameraPermission}
          >
            Camera
          </Button>
          <Button
            icon="image-area"
            mode="contained"
            labelStyle={styles.label}
            onPress={onCameraRollPermission}
          >
            gallery
          </Button>
        </View>
        <Button style={styles.cancelButton} onPress={onCloseModal}>
          cancel
        </Button>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: colors.light,
    width: "100%",
    height: 135,
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30,
  },
  label: {
    color: colors.white,
  },
  cancelButton: {
    marginTop: -5,
  },
});

export default PermissionModal;
