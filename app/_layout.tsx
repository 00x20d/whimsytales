import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { Provider } from "react-redux";
import { store } from "../src/store/store";
import { useDispatch } from "react-redux";
import { supabase } from "../src/lib/supabase";
import { useColorScheme } from "../src/hooks/useColorScheme";
import { setUser } from "../src/store/slices/authSlice";
import { Linking } from "react-native";
import { useRouter } from "expo-router";

SplashScreen.preventAutoHideAsync();

function AppContent() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      dispatch(setUser(session?.user ?? null));
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      dispatch(setUser(session?.user ?? null));
    });
  }, [dispatch]);

  const [loaded] = useFonts({
    Roboto: require("../src/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("../src/assets/fonts/Roboto-Bold.ttf"),
    PlayfairDisplay: require("../src/assets/fonts/PlayfairDisplay-Regular.ttf"),
    "PlayfairDisplay-Bold": require("../src/assets/fonts/PlayfairDisplay-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    const handleDeepLink = (event: { url: string }) => {
      console.log("Received deep link:", event.url);
      if (event.url.includes("auth/callback")) {
        // Handle the authentication callback
        router.replace("/"); // or wherever you want to redirect after successful login
      }
    };

    Linking.addEventListener("url", handleDeepLink);

    return () => {
      Linking.removeAllListeners("url");
    };
  }, [router]);

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

// import {
//   DarkTheme,
//   DefaultTheme,
//   ThemeProvider,
// } from "@react-navigation/native";
// import { useFonts } from "expo-font";
// import { Stack } from "expo-router";
// import * as SplashScreen from "expo-splash-screen";
// import { useEffect } from "react";
// import "react-native-reanimated";
// import { Provider } from "react-redux";
// import { store } from "@/src/store/store";
// import { supabase } from "@/src/lib/supabase";
// import { useColorScheme } from "@/src/hooks/useColorScheme";
// import { useDispatch } from "react-redux";
// import { setUser } from "@/src/store/slices/authSlice";

// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const dispatch = useDispatch();
//   const [loaded] = useFonts({
//     Roboto: require("@/src/assets/fonts/Roboto-Regular.ttf"),
//     "Roboto-Bold": require("@/src/assets/fonts/Roboto-Bold.ttf"),
//     PlayfairDisplay: require("@/src/assets/fonts/PlayfairDisplay-Regular.ttf"),
//     "PlayfairDisplay-Bold": require("@/src/assets/fonts/PlayfairDisplay-Bold.ttf"),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       dispatch(setUser(session?.user ?? null));
//     });

//     supabase.auth.onAuthStateChange((_event, session) => {
//       dispatch(setUser(session?.user ?? null));
//     });
//   }, [dispatch]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <Provider store={store}>
//       <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
//         <Stack
//           screenOptions={{
//             headerShown: false,
//             contentStyle: { backgroundColor: "transparent" },
//           }}
//         >
//           <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
//           <Stack.Screen name='onboarding' options={{ headerShown: false }} />
//           <Stack.Screen name='+not-found' options={{ title: "Oops!" }} />
//         </Stack>
//       </ThemeProvider>
//     </Provider>
//   );
// }
