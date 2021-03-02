import React, { useState } from "react";
import { Modal, StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { Button } from "react-native-paper";
import * as Yup from "yup";

import { Form, FormField } from "../components/form";
import { colors } from "../constants";

let validationSchema = Yup.object().shape({
  name: Yup.string().label("Name"),
  phone: Yup.number()

    .min(8)
    .max(8)
    .positive()
    .integer()
    .label("Phone"),
  email: Yup.string().email("Invalid Email"),
  salary: Yup.string().label("Salary"),
  picture: Yup.string().label("Pciture"),
  position: Yup.string().label("Position"),
});

function DestinationDetailsScreen() {
  const [modelVisible, setModelVisitble] = useState(false);

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Form
          initialValues={{
            name: "",
            phone: "",
            email: "",
            salary: "",
            picture: "",
            position: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(values)}
        >
          <FormField
            name="name"
            label="Name"
            keyboardType="default"
            placeholder="Name"
          />
          <FormField
            name="phone"
            label="Phone"
            keyboardType="number-pad"
            placeholder="Phone"
          />
          <FormField
            name="email"
            label="Email"
            keyboardType="email-address"
            placeholder="Email"
          />
          <FormField
            name="salary"
            label="Salary"
            keyboardType="default"
            placeholder="Salary"
          />
          <FormField
            name="position"
            label="Position"
            keyboardType="default"
            placeholder="Position"
          />
          <Button
            style={styles.uploadButton}
            icon="upload"
            mode="contained"
            labelStyle={styles.label}
            onPress={() => setModelVisitble(true)}
          >
            Upload Image
          </Button>
          <Modal visible={modelVisible} animationType="slide" transparent>
            <View style={styles.modal}>
              <View style={styles.buttonsContainer}>
                <Button
                  icon="camera"
                  mode="contained"
                  labelStyle={styles.label}
                  onPress={() => true}
                >
                  Camera
                </Button>
                <Button
                  icon="image-area"
                  mode="contained"
                  labelStyle={styles.label}
                  onPress={() => true}
                >
                  gallery
                </Button>
              </View>
              <Button
                style={styles.cancelButton}
                onPress={() => setModelVisitble(false)}
              >
                cancel
              </Button>
            </View>
          </Modal>
        </Form>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.grey,
  },
  uploadButton: {
    marginTop: 10,
  },
  label: {
    color: "white",
  },
  modal: {
    backgroundColor: colors.white,
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
  cancelButton: {
    marginTop: -5,
  },
});

export default DestinationDetailsScreen;
