import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS } from "../../constants/theme";
import CharacterCreationForm from "../../src/components/character/CharacterCreationForm";
import { useRouter } from "expo-router";
import { supabase } from "../../src/lib/supabase";
import { useSelector } from "react-redux";
import { RootState } from "../../src/store/store";

export default function CreateCharacter() {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.user);

  console.log("User in CreateCharacter:", user);

  const handleCharacterCreated = async (character: any) => {
    console.log("Attempting to create character:", character);
    if (!user) {
      console.error("No user found");
      return;
    }

    try {
      console.log("Inserting character for user:", user.id);
      const now = new Date().toISOString();
      const { data, error } = await supabase.from("Character").insert({
        ...character,
        user_id: user.id,
        is_main: true,
        created_at: now,
        updated_at: now,
      });

      if (error) {
        console.error("Error creating character:", error);
      } else {
        console.log("Character added to Supabase:", data);
        console.log("Attempting to redirect to dashboard");
        router.replace("/(tabs)/dashboard");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
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
