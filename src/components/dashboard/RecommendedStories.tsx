import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { COLORS, FONTS } from "../../../constants/theme";
import { LinearGradient } from "expo-linear-gradient";

const recommendedStories = [
  {
    id: "1",
    title: "Princess Lila's Magical Quest",
    image: require("../../assets/images/princess_lila.png"),
  },
  {
    id: "2",
    title: "Astronaut Eli's Fantastic Launch",
    image: require("../../assets/images/astronaut_eli.png"),
  },
  {
    id: "3",
    title: "Astronaut Eli's Fantastic Launch",
    image: require("../../assets/images/astronaut_eli.png"),
  },
  {
    id: "4",
    title: "Astronaut Eli's Fantastic Launch",
    image: require("../../assets/images/astronaut_eli.png"),
  },
];

const RecommendedStories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended Stories For You</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {recommendedStories.map((story) => (
          <TouchableOpacity key={story.id} style={styles.storyCard}>
            <Image source={story.image} style={styles.storyImage} />
            <LinearGradient
              colors={["transparent", "rgb(38, 8, 39)"]}
              style={styles.gradient}
            >
              <Text style={styles.storyTitle}>{story.title}</Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 20,
  },
  title: {
    fontFamily: FONTS.playfairBold,
    fontSize: 26,
    color: COLORS.white,
    marginBottom: 25,
  },
  scrollContent: {
    paddingRight: 20,
  },
  storyCard: {
    width: 150,
    height: 200,
    marginRight: 15,
    borderRadius: 10,
    overflow: "hidden",
  },
  storyImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "40%",
    justifyContent: "flex-end",
    padding: 10,
  },
  storyTitle: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    color: COLORS.white,
    textAlign: "center",
  },
});

export default RecommendedStories;
