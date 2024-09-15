import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { COLORS, FONTS } from "../../../constants/theme";

const recentStories = [
  {
    id: "1",
    title: "The Dragon's Lair",
    image: require("../../assets/images/story1.png"),
  },
  {
    id: "2",
    title: "Pirate's Treasure",
    image: require("../../assets/images/story2.png"),
  },
  {
    id: "3",
    title: "Space Odyssey",
    image: require("../../assets/images/story3.png"),
  },
];

export default function RecentStories() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Stories</Text>
      <FlatList
        data={recentStories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.storyItem}>
            <Image source={item.image} style={styles.storyImage} />
            <Text style={styles.storyTitle}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 18,
    color: COLORS.white,
    marginBottom: 10,
  },
  storyItem: {
    marginRight: 15,
    width: 120,
  },
  storyImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 5,
    resizeMode: "cover",
  },
  storyTitle: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    color: COLORS.white,
    textAlign: "center",
  },
});
