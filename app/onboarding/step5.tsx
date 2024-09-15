import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS } from "../../constants/theme";
import CharacterCreationForm from "../../src/components/character/CharacterCreationForm";
import { useRouter } from "expo-router";

export default function CreateCharacter() {
  const router = useRouter();

  const handleCharacterCreated = (character: any) => {
    console.log("Character created:", character);
    // Navigate to the next screen or home screen
    router.push("/onboarding/step5"); // Adjust this route as needed
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../src/assets/images/logo-final.png")}
        style={styles.icon}
      />
      <Text style={styles.title}>Create Your Kid's Character</Text>
      <CharacterCreationForm onSuccess={handleCharacterCreated} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    padding: 30,
  },
  icon: {
    width: 125,
    height: 125,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    fontFamily: FONTS.playfairBold,
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 25,
  },
});
