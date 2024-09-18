import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { useCharacter } from "../../hooks/useCharacter";
import { COLORS, FONTS } from "../../../constants/theme";

interface CharacterSelectionProps {
  onContinue: (selectedCharacters: string[]) => void;
}

export default function CharacterSelection({
  onContinue,
}: CharacterSelectionProps) {
  const { characters } = useCharacter();
  const [selectedCharacters, setSelectedCharacters] = useState<string[]>([]);

  const toggleCharacterSelection = (id: string) => {
    setSelectedCharacters((prev) =>
      prev.includes(id) ? prev.filter((charId) => charId !== id) : [...prev, id]
    );
  };

  const renderCharacterItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={[
        styles.characterItem,
        selectedCharacters.includes(item.id) && styles.selectedCharacter,
      ]}
      onPress={() => toggleCharacterSelection(item.id)}
    >
      <Text style={styles.characterName}>{item.name}</Text>
      <Text style={styles.characterInfo}>
        {item.age} years old • {item.gender}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Characters</Text>
      <FlatList
        data={characters}
        renderItem={renderCharacterItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => onContinue(selectedCharacters)}
        disabled={selectedCharacters.length === 0}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.primary,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 24,
    color: COLORS.white,
    marginBottom: 20,
  },
  list: {
    flex: 1,
  },
  characterItem: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  selectedCharacter: {
    backgroundColor: COLORS.highlight,
  },
  characterName: {
    fontFamily: FONTS.bold,
    fontSize: 18,
    color: COLORS.primary,
  },
  characterInfo: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    color: COLORS.gray,
  },
  continueButton: {
    backgroundColor: COLORS.highlight,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  continueButtonText: {
    fontFamily: FONTS.bold,
    fontSize: 18,
    color: COLORS.primary,
  },
});
