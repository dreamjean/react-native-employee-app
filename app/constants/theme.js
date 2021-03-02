import { DefaultTheme } from "react-native-paper";

import colors from "./colors";

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: colors.yellow,
  },
};
