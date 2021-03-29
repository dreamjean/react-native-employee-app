import { create } from "apisauce";
import React from "react";
import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import * as Yup from "yup";

import {
  Form,
  FormField,
  FormImagePicker,
  SubmitButton,
} from "../components/form";
import { colors } from "../constants";

let validationSchema = Yup.object().shape({
  name: Yup.string().label("Name"),
  phone: Yup.number().min(6).max(6).positive().integer().label("Phone"),
  email: Yup.string().email("Invalid Email"),
  salary: Yup.string().label("Salary"),
  picture: Yup.string().nullable().label("Picture"),
  profession: Yup.string().label("Profession"),
});

const apiClient = create({
  baseURL: "https://api.cloudinary.com/v1_1/dy9pp33hg",
});

function NewPersonalEditScreen() {
  const handleSubmit = (userInfo) => {
    const data = new FormData();
    data.append("file", {
      name: `image.${userInfo.picture.split(".")[1]}`,
      type: "image/jepg",
      uri: userInfo.picture,
    });
    data.append("upload_preset", "employeeApp");
    data.append("cloud_name", "dy9pp33hg");

    apiClient.post("/image/upload", data);
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      extraScrollHeight={100}
      enableOnAndroid
      enableAutomaticScroll
      keyboardShouldPersistTaps="always"
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <Form
          initialValues={{
            name: "",
            phone: "",
            email: "",
            salary: "",
            picture: null,
            profession: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <FormImagePicker name="picture" />
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
            name="profession"
            label="Profession"
            keyboardType="default"
            placeholder="Profession"
          />
          <SubmitButton style={styles.uploadButton} labelStyle={styles.label}>
            Save
          </SubmitButton>
        </Form>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 30,
  },
  uploadButton: {
    marginTop: 20,
  },
  label: {
    color: colors.white,
  },
});

export default NewPersonalEditScreen;
