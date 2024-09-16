import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { COLORS, FONTS } from "../../../constants/theme";

const morals = [
  {
    id: "1",
    name: "Friends",
    image: require("../../assets/images/learning-concept-1.png"),
  },
  {
    id: "2",
    name: "Courage",
    image: require("../../assets/images/learning-concept-2.png"),
  },
  {
    id: "3",
    name: "Generosity",
    image: require("../../assets/images/learning-concept-3.png"),
  },
  {
    id: "4",
    name: "Dreams",
    image: require("../../assets/images/learning-concept-4.png"),
  },
];

const LearnSomethingNew = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Learn Something New</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {morals.map((moral) => (
          <TouchableOpacity key={moral.id} style={styles.moralCard}>
            <Image source={moral.image} style={styles.moralImage} />
            <View style={styles.moralNameContainer}>
              <Text style={styles.moralName}>{moral.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginBottom: 35,
  },
  title: {
    fontFamily: FONTS.playfairBold,
    fontSize: 26,
    color: COLORS.white,
    marginBottom: 25,
  },
  moralCard: {
    width: 120,
    height: 160, // 3:4 aspect ratio
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginRight: 15,
    overflow: "hidden",
  },
  moralImage: {
    width: "100%",
    height: "80%", // 4/5 of the card height
    resizeMode: "cover",
  },
  moralNameContainer: {
    height: "20%", // 1/5 of the card height
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  moralName: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    color: COLORS.primary,
    textAlign: "center",
  },
  scrollContent: {
    paddingRight: 20, // Add some padding at the end for better UX
  },
});

export default LearnSomethingNew;
