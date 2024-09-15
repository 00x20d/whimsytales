import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../../../constants/theme";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Dashboard</Text>
      <Ionicons name='notifications-outline' size={24} color={COLORS.white} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: COLORS.primary,
  },
  title: {
    fontFamily: FONTS.playfairBold,
    fontSize: 24,
    color: COLORS.white,
  },
});
