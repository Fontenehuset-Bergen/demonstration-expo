import { Stack } from "expo-router";
import { Modal } from "./modal";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="modal"
        options={{
          presentation: "modal",
        }} />
    </Stack>
  );
}