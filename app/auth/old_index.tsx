import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../constants/theme";

const AuthScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("@/src/assets/images/logo-final.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.heading}>Whimsy Tales</Text>
        {/* <TextInput
          style={styles.input}
          placeholder='Email'
          placeholderTextColor={COLORS.gray}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          placeholderTextColor={COLORS.gray}
          secureTextEntry
        /> */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        {/* <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.dividerLine} />
        </View> */}
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Sign In with Google</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.signupLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    padding: 16,
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 240,
    height: 240,
    resizeMode: "contain",
  },
  formContainer: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  heading: {
    fontFamily: FONTS.playfairBold,
    fontSize: 3,
    fontWeight: "black",
    color: COLORS.white,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    fontFamily: FONTS.regular,
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  button: {
    backgroundColor: COLORS.highlight,
    padding: 15,
    width: "80%",
    alignSelf: "center",
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
