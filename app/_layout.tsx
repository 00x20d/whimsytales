import React, { useEffect } from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import { Provider } from "react-redux";
import { store } from "../src/store/store";
import { useDispatch } from "react-redux";
import { supabase } from "../src/lib/supabase";
import { useColorScheme } from "../src/hooks/useColorScheme";
import { setUser } from "../src/store/slices/authSlice";
import { Linking } from "react-native";
import { useRouter } from "expo-router";
import { checkMainAvatarExists } from "../src/utils/avatarUtils";

SplashScreen.preventAutoHideAsync();

function AppContent() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();

  const [loaded] = useFonts({
    Roboto: require("../src/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("../src/assets/fonts/Roboto-Bold.ttf"),
    PlayfairDisplay: require("../src/assets/fonts/PlayfairDisplay-Regular.ttf"),
    "PlayfairDisplay-Bold": require("../src/assets/fonts/PlayfairDisplay-Bold.ttf"),
  });

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        //console.log("Auth state changed:", event, session);
        if (event === "SIGNED_IN" && session) {
          //console.log("User signed in:", session.user);
          dispatch(setUser(session.user));
          try {
            const hasMainAvatar = await checkMainAvatarExists(session.user.id);
            console.log("Has main avatar:", hasMainAvatar);
            if (hasMainAvatar) {
              console.log("Attempting to navigate to dashboard");
              await router.replace("/(tabs)/dashboard");
            } else {
              console.log("Attempting to navigate to onboarding");
              await router.replace("/onboarding/step1");
            }
          } catch (error) {
            console.error("Error during navigation:", error);
          }
        } else if (event === "SIGNED_OUT") {
          console.log("User signed out");
          dispatch(setUser(null));
          await router.replace("/");
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router, dispatch]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    const handleDeepLink = async (event: { url: string }) => {
      console.log("Received deep link:", event.url);
      const url = new URL(event.url);
      const path = url.pathname.slice(1);
      const queryParams = Object.fromEntries(url.searchParams);

      if (path === "auth/callback") {
        if (queryParams.error) {
          console.error("Auth error:", queryParams.error_description);
          // Handle error (e.g., show error message to user)
        } else {
          const { data, error } = await supabase.auth.getSession();
          if (data.session) {
            dispatch(setUser(data.session.user));
            router.replace("/onboarding/step1");
          } else if (error) {
            console.error("Session retrieval error:", error);
            // Handle error (e.g., show error message to user)
          }
        }
      }
    };

    Linking.addEventListener("url", handleDeepLink);

    return () => {
      Linking.removeAllListeners("url");
    };
  }, [router, dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "transparent" },
        }}
      >
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='onboarding' options={{ headerShown: false }} />
        <Stack.Screen name='+not-found' options={{ title: "Oops!" }} />
      </Stack>
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
