import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../../../constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function Header() {
  const mainCharacterName = useSelector(
    (state: RootState) => state.user.mainCharacter?.name || "Adventurer"
  );

  return (
    <ImageBackground
      source={require("../../assets/images/header_background.png")}
      style={styles.headerBackground}
    >
      <LinearGradient
        colors={["transparent", COLORS.primary]}
        style={styles.gradient}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hey, {mainCharacterName}!</Text>
            <Text style={styles.subGreeting}>
              Your imagination is a superpower - use it to create amazing things
              every day!
            </Text>
          </View>
          <Ionicons
            name='notifications-outline'
            size={24}
            color={COLORS.white}
            style={styles.icon}
          />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  headerBackground: {
    width: "100%",
    height: 175,
  },
  gradient: {
    flex: 1,
    justifyContent: "flex-end",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 30,
    paddingBottom: 30,
  },
  greeting: {
    fontFamily: FONTS.playfairBold,
    fontSize: 30,
    color: COLORS.white,
    marginBottom: 10,
  },
  subGreeting: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    color: COLORS.white,
    marginBottom: 10,
    maxWidth: "90%",
  },
  icon: {
    marginTop: 5,
  },
});
