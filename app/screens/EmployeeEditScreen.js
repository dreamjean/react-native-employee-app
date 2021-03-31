import React from "react";
import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import * as Yup from "yup";

import employeeApi from "../api/employee";
import {
  Form,
  FormField,
  FormImagePicker,
  SubmitButton,
} from "../components/form";
import { colors } from "../constants";

let validationSchema = Yup.object().shape({
  name: Yup.string().label("Name"),
  email: Yup.string().email("Invalid Email"),
  phone: Yup.number().positive().integer().label("Phone"),
  salary: Yup.string().label("Salary"),
  picture: Yup.string().nullable().label("Picture"),
  profession: Yup.string().label("Profession"),
});

// const apiClient = create({
//   baseURL: "https://api.cloudinary.com/v1_1/dy9pp33hg",
// });

function EmployeeEditScreen() {
  const handleSubmit = async (employeeInfo, { resetForm }) => {
    const result = await employeeApi.addEmployee(employeeInfo);
    console.log(result);
    if (!result.ok) {
      return alert("Could not save the employee!");
    }

    resetForm();
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
            email: "",
            phone: "",
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
            name="email"
            label="Email"
            keyboardType="email-address"
            placeholder="Email"
          />
          <FormField
            name="phone"
            label="Phone"
            keyboardType="number-pad"
            placeholder="Phone"
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

export default EmployeeEditScreen;
