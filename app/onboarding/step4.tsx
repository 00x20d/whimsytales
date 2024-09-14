import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../constants/theme";
import { Link } from "expo-router";

export default function OnboardingStep1() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../src/assets/images/logo-final.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Time To Start.</Text>
      <Text style={styles.subtitle}>
        Before you start creating your whimsy tales, let's setup your kids'
        profile.
      </Text>
      <Link href='/onboarding/step3' asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Let's Do It!</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontFamily: FONTS.playfairBold,
    fontSize: 24,
    color: COLORS.white,
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    paddingHorizontal: 25,
    color: COLORS.white,
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: COLORS.highlight,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    fontFamily: FONTS.bold,
    fontSize: 18,
    color: COLORS.primary,
  },
});
