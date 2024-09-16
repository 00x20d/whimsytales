import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../src/components/dashboard/Header";
import LearnSomethingNew from "../../src/components/dashboard/LearnSomethingNew";
import RecommendedStories from "../../src/components/dashboard/RecommendedStories";
import { COLORS } from "../../constants/theme";

export default function DashboardScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <LearnSomethingNew />
        <RecommendedStories />
      </View>
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
    paddingHorizontal: 20,
  },
});
