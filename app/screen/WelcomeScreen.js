import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.taglineText}>Sell What You Don't Need</Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => console.log("login tapped")} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => console.log("register tapped")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: "flex-end", alignItems: "center" },
  buttonContainer: { padding: 15, width: "100%" },
  logo: { width: 100, height: 100 },
  logoContainer: { position: "absolute", top: 100, alignItems: "center" },
  taglineText: { fontSize: 24, fontWeight: "600", padding: 20 },
});

export default WelcomeScreen;
