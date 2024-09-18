import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CharacterSelection from "../../src/components/story/CharacterSelection";
import { COLORS } from "../../constants/theme";

export default function CreateScreen() {
  const [step, setStep] = useState(1);
  const [selectedCharacters, setSelectedCharacters] = useState<string[]>([]);

  const handleCharacterSelection = (characters: string[]) => {
    setSelectedCharacters(characters);
    setStep(2);
  };

  return (
    <SafeAreaView style={styles.container}>
      {step === 1 && (
        <CharacterSelection onContinue={handleCharacterSelection} />
      )}
      {/* Add more steps here as needed */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
});
