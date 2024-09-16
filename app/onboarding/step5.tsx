import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS } from "../../constants/theme";
import CharacterCreationForm from "../../src/components/character/CharacterCreationForm";
import { useRouter } from "expo-router";
import { supabase } from "../../src/lib/supabase";
import { useUser } from "@supabase/auth-helpers-react";

export default function CreateCharacter() {
  const router = useRouter();
  const user = useUser();

  console.log("User", user);

  const handleCharacterCreated = async (character: any) => {
    console.log("Character created:", character);
    try {
      const { data, error } = await supabase
        .from("Character")
        .insert({ ...character, user_id: user?.id, is_main: true });

      if (error) {
        console.error("Error creating avatar:", error);
        console.log("Error", `Failed to create avatar: ${error.message}`);
      } else {
        console.log("Avatar created successfully:", data);
        router.replace("/(tabs)/dashboard");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      console.log("Error", "An unexpected error occurred");
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
