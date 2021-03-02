import { useFormikContext } from "formik";
import React from "react";
import { Button } from "react-native-paper";

const SubmitButton = ({ children, ...rest }) => {
  const { handleSubmit } = useFormikContext();

  return <Button onPress={handleSubmit} {...{ children }} {...rest} />;
};

export default SubmitButton;
