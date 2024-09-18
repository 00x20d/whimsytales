import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { COLORS, FONTS } from "../../../constants/theme";
import { useCharacter } from "../../hooks/useCharacter";

interface CharacterCreationFormProps {
  onSuccess: (data: any) => void;
}

export default function CharacterCreationForm({
  onSuccess,
}: CharacterCreationFormProps) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [interests, setInterests] = useState("");
  const [gender, setGender] = useState<"boy" | "girl" | "">("");
  const { createCharacter } = useCharacter();

  const handleCreateCharacter = async () => {
    if (!name || !age || !interests || !gender) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    const character = {
      // Remove the id field, let Supabase generate it
      name,
      age: parseInt(age),
      interests: interests.split(",").map((interest) => interest.trim()),
      gender,
      is_main: true,
    };

    try {
      createCharacter(character);
      onSuccess(character);
    } catch (error) {
      console.error("Error creating character:", error);
      if (error instanceof Error) {
        Alert.alert("Error", `Failed to create character: ${error.message}`);
      } else {
        Alert.alert("Error", "Failed to create character. Please try again.");
      }
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Your kid's name..."
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder='Enter their age...'
        value={age}
        onChangeText={setAge}
        keyboardType='numeric'
      />

      <TextInput
        style={styles.input}
        placeholder='Interests: Games, Cartoons, Dogs etc.'
        value={interests}
        onChangeText={setInterests}
      />

      <Text style={styles.label}>Gender*</Text>
      <Text style={styles.labelDescription}>
        *used for the correct pronouns in the generated text.
      </Text>
      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={[
            styles.genderButton,
            gender === "boy" && styles.selectedGender,
          ]}
          onPress={() => setGender("boy")}
        >
          <Text
            style={[
              styles.genderText,
              gender === "boy" && { color: COLORS.primary },
            ]}
          >
            boy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.genderButton,
            gender === "girl" && styles.selectedGender,
          ]}
          onPress={() => setGender("girl")}
        >
          <Text
            style={[
              styles.genderText,
              gender === "girl" && { color: COLORS.primary },
            ]}
          >
            girl
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleCreateCharacter}>
        <Text style={styles.buttonText}>Let's Do It!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    marginBottom: 30,
  },
  label: {
    alignSelf: "flex-start",
    color: "white",
    marginBottom: 5,
    fontSize: 16,
  },
  labelDescription: {
    alignSelf: "flex-start",
    color: "white",
    marginBottom: 5,
    fontSize: 12,
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
    marginTop: 20,
  },
  genderButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: COLORS.highlight,
    borderRadius: 20,
    paddingVertical: 10,
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: 30,
    marginHorizontal: 5,
    fontFamily: FONTS.regular,
  },
  selectedGender: {
    backgroundColor: COLORS.highlight,
  },
  genderText: {
    color: COLORS.highlight,
    textAlign: "center",
    fontFamily: FONTS.bold,
  },
  button: {
    backgroundColor: COLORS.highlight,
    padding: 15,
    marginTop: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.primary,
    fontWeight: "bold",
  },
});
