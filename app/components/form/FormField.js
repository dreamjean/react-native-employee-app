import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

import ErrorMessage from "./ErrorMessage";

const FormField = ({ name, ...rest }) => {
  const {
    setFieldValue,
    setFieldTouched,
    values,
    errors,
    touched,
  } = useFormikContext();

  return (
    <>
      <TextInput
        error={errors[name]}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        mode="outlined"
        style={styles.input}
        {...rest}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    marginVertical: 5,
  },
});

export default FormField;
