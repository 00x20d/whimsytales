import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../src/components/dashboard/Header";
import StoryCard from "../../src/components/dashboard/StoryCard";
import RecentStories from "../../src/components/dashboard/RecentStories";
import CharacterCard from "../../src/components/dashboard/CharacterCard";
import NewStoryButton from "../../src/components/dashboard/NewStoryButton";
import { COLORS } from "../../constants/theme";

export default function DashboardScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.content}>
        <StoryCard />
        <RecentStories />
        <CharacterCard />
      </ScrollView>
      <NewStoryButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  content: {
    flex: 1,
    padding: 20,
  },
});
