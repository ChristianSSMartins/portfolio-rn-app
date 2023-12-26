import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { Welcome } from "@screens/auth/WelcomeScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView />
      <Welcome />
    </SafeAreaProvider>
  );
}
