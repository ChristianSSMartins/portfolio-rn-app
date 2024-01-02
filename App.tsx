import { StatusBar } from "react-native";

import { ThemeProvider } from "styled-components";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import theme from "./src/theme";

import { Welcome } from "@screens/auth/WelcomeScreen";

export default function App() {
  useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <SafeAreaView>
          <StatusBar backgroundColor={theme.COLORS.MAIN} />
        </SafeAreaView>
        <Welcome />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
