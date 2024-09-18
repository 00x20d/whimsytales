import React, { useState, useEffect } from "react";
import "expo-router/entry";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  TextInput,
} from "react-native";
import { COLORS, FONTS } from "../constants/theme";
import { Link, useRouter } from "expo-router";
import { useAuth } from "../src/hooks/useAuth";
import { ActivityIndicator } from "react-native";
import { supabase } from "../src/lib/supabase";
import { checkMainAvatarExists } from "../src/utils/avatarUtils";

const AuthScreen = () => {
  console.log("AuthScreen initialized");
  //console.log("Supabase instance in AuthScreen:", supabase);

  const { signInWithGoogle, isLoading, user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCheckingAvatar, setIsCheckingAvatar] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function checkUserAndAvatar() {
      if (user) {
        try {
          console.log("Checking user for main character:", user.id);
          const hasMainAvatar = await checkMainAvatarExists(user.id);
          console.log("Has main avatar:", hasMainAvatar);
          if (hasMainAvatar) {
            console.log("Navigating to dashboard");
            router.replace("/(tabs)/dashboard");
          } else {
            console.log("No main avatar found. Navigating to onboarding");
            router.replace("/onboarding/step1");
          }
        } catch (error) {
          console.error("Error during navigation:", error);
          // If there's an error, navigate to onboarding as a fallback
          console.log("Error occurred. Navigating to onboarding as fallback");
          router.replace("/onboarding/step1");
        } finally {
          setIsCheckingAvatar(false);
        }
      } else {
        setIsCheckingAvatar(false);
      }
    }

    checkUserAndAvatar();
  }, [user, router]);

  const handleSignUp = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;

      Alert.alert("Success", "Check your email for the confirmation link");
      router.replace("/onboarding/step1");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      Alert.alert("Error", errorMessage);
    }
  };

  if (isLoading || isCheckingAvatar) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' color={COLORS.highlight} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../src/assets/images/logo-final.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.heading}>Whimsy Tales</Text>
        <TextInput
          style={styles.input}
          placeholder='Email'
          placeholderTextColor={COLORS.gray}
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
          autoCapitalize='none'
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          placeholderTextColor={COLORS.gray}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up with Email</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={signInWithGoogle}
          disabled={isLoading}
        >
          <Text style={styles.buttonText}>
            {isLoading ? "Signing In..." : "Sign In with Google"}
          </Text>
        </TouchableOpacity>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Already have an account? </Text>
          <Link href='/onboarding/step1' asChild>
            <TouchableOpacity>
              <Text style={styles.signupLink}>Sign In</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: COLORS.primary,
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 225,
    height: 225,
    resizeMode: "contain",
  },
  formContainer: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  heading: {
    fontFamily: FONTS.playfairBold,
    fontSize: 35,
    fontWeight: "black",
    color: COLORS.white,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    fontFamily: FONTS.regular,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    color: COLORS.primary,
  },
  button: {
    backgroundColor: COLORS.highlight,
    padding: 15,
    alignItems: "center",
    marginTop: 10,
    borderRadius: 25,
  },
  buttonText: {
    fontFamily: FONTS.bold,
    color: COLORS.primary,
    fontSize: 16,
  },
  forgotPassword: {
    fontFamily: FONTS.regular,
    color: COLORS.primary,
    textAlign: "center",
    marginTop: 15,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.gray,
  },
  dividerText: {
    fontFamily: FONTS.regular,
    color: COLORS.gray,
    paddingHorizontal: 10,
  },
  socialButton: {
    backgroundColor: COLORS.highlight,
    borderRadius: 25,
    padding: 15,
    alignItems: "center",
    marginBottom: 10,
  },
  socialButtonText: {
    fontFamily: FONTS.bold,
    color: COLORS.primary,
    fontSize: 16,
  },
  signupContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
  },
  signupText: {
    fontFamily: FONTS.regular,
    color: COLORS.gray,
  },
  signupLink: {
    fontFamily: FONTS.bold,
    color: COLORS.gray,
    textDecorationLine: "underline",
  },
});

export default AuthScreen;
