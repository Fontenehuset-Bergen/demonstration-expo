import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{presentation: "modal"}} />
      {/* Denne typen modal må legges til her som en egen stack. */}
    </Stack>
  );
}