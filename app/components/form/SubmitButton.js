import { useFormikContext } from "formik";
import React from "react";
import { Button } from "react-native-paper";

const SubmitButton = ({ children, ...rest }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Button
      icon="content-save"
      mode="contained"
      onPress={handleSubmit}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
