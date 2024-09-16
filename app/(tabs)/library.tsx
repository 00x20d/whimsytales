import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../constants/theme";

export default function CreateScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Library</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  text: {
    fontFamily: FONTS.bold,
    fontSize: 24,
    color: COLORS.white,
  },
});
