import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../../../constants/theme";

export default function NewStoryButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Ionicons name='add' size={24} color={COLORS.primary} />
      <Text style={styles.buttonText}>New Story</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.highlight,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    position: "absolute",
    bottom: 20,
    right: 20,
    elevation: 5,
  },
  buttonText: {
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLORS.primary,
    marginLeft: 10,
  },
});
