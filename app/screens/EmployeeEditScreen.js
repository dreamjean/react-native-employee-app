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
  position: Yup.string().label("Position"),
});

function EmployeeEditScreen({ navigation, route }) {
  const handleSubmit = async (employeeInfo, { resetForm }) => {
    if (route.params) {
      const id = route.params._id;
      await employeeApi.updateEmployee({ id, ...employeeInfo });
    } else {
      await employeeApi.addEmployee(employeeInfo);
    }

    resetForm();
    navigation.navigate("Home");
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
            name: route.params?.name || "",
            email: route.params?.email || "",
            phone: route.params?.phone.toString() || "",
            salary: route.params?.salary || "",
            picture: route.params?.picture || null,
            position: route.params?.position || "",
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
            name="position"
            label="Position"
            keyboardType="default"
            placeholder="Position"
          />
          <SubmitButton style={styles.uploadButton} labelStyle={styles.label}>
            {route.params ? "Update" : "Save"}
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
