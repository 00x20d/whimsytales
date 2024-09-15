import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: COLORS.highlight }}>
      <Tabs.Screen
        name='dashboard'
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home-outline' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen name='explore' options={{ title: "Explore" }} />
      {/* <Tabs.Screen name='library' options={{ title: "Library" }} />
      <Tabs.Screen name='create' options={{ title: "Create" }} />
      <Tabs.Screen name='community' options={{ title: "Community" }} />
      <Tabs.Screen name='profile' options={{ title: "Profile" }} /> */}
    </Tabs>
  );
}
