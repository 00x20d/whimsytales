import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../../../constants/theme";

export default function StoryCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Continue your story</Text>
      <Text style={styles.storyTitle}>The Magical Forest Adventure</Text>
      <TouchableOpacity style={styles.button}>
        <Ionicons name='play' size={24} color={COLORS.primary} />
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.highlight,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 18,
    color: COLORS.primary,
    marginBottom: 10,
  },
  storyTitle: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    color: COLORS.primary,
    marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignSelf: "flex-start",
  },
  buttonText: {
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLORS.primary,
    marginLeft: 10,
  },
});
