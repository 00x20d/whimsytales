import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../../constants/theme";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name='dashboard'
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} iconName='home' label='Home' />
          ),
        }}
      />
      <Tabs.Screen
        name='library'
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} iconName='book' label='Library' />
          ),
        }}
      />
      <Tabs.Screen
        name='create'
        options={{
          tabBarIcon: () => (
            <View style={styles.createButtonContainer}>
              <View style={styles.createButton}>
                <Ionicons name='add' size={30} color={COLORS.primary} />
              </View>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name='community'
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} iconName='people' label='Community' />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} iconName='person' label='Profile' />
          ),
        }}
      />
    </Tabs>
  );
}

function TabBarIcon({
  focused,
  iconName,
  label,
}: {
  focused: boolean;
  iconName: string;
  label: string;
}) {
  return (
    <View style={styles.tabItem}>
      <Ionicons
        name={iconName as any}
        size={20}
        color={focused ? COLORS.highlight : COLORS.white}
      />
      <Text
        style={[
          styles.tabLabel,
          { color: focused ? COLORS.highlight : COLORS.white },
        ]}
      >
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#260827",
    height: 75,
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
    paddingTop: 15,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabLabel: {
    fontSize: 9,
    fontFamily: FONTS.regular,
    marginTop: 4,
  },
  createButtonContainer: {
    position: "absolute",
    top: -45,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  createButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.highlight,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowColor: COLORS.highlight,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
      android: {
        elevation: 8,
      },
    }),
  },
});
