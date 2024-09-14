import { Platform } from "react-native";

export const COLORS = {
  primary: "#511555",
  white: "#FFFFFF",
  highlight: "#f3d208",
  gray: "#888888",
};

export const FONTS = {
  regular: Platform.OS === "ios" ? "Roboto-Regular" : "Roboto",
  bold: Platform.OS === "ios" ? "Roboto-Bold" : "Roboto",
  playfair:
    Platform.OS === "ios" ? "PlayfairDisplay-Regular" : "PlayfairDisplay",
  playfairBold:
    Platform.OS === "ios" ? "PlayfairDisplay-Bold" : "PlayfairDisplay",
};
