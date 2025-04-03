import { Stack } from "expo-router";
import { Modal } from "./modal";
import { StatusBar } from "react-native";

export default function Layout() {
  return (
    <>
    <StatusBar backgroundColor="#1c1429" />
    
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="modal"
        options={{
          presentation: "modal",
        }} />
    </Stack>
    </>
  );
}
