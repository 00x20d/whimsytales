import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS, FONTS } from "../../../constants/theme";

export default function CharacterCard() {
  return (
    <View style={styles.card}>
      <Image
        source={require("../../assets/images/character-avatar.png")}
        style={styles.avatar}
      />
      <View style={styles.info}>
        <Text style={styles.name}>Lily</Text>
        <Text style={styles.stats}>5 stories • 3 badges</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontFamily: FONTS.bold,
    fontSize: 18,
    color: COLORS.primary,
    marginBottom: 5,
  },
  stats: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    color: COLORS.gray,
  },
});
