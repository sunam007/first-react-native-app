import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import ViewImageScreen from "./app/screen/ViewImageScreen";
import WelcomeScreen from "./app/screen/WelcomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./app/components/AppText";
import colors from "./app/config/colors";
import AppButton from "./app/components/AppButton";

export default function App() {
  return <WelcomeScreen />;
}
