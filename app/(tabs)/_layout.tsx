import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="placeholder"
        options={{
          href: null,
        }}
      />
      {/* Du kan bruke seksjonen under til å lage din egen knapp til din side, følg beskrivelsen i feltene */}
      {/* <Tabs.Screen
        name="bruk filnavn du valgte her"
        options={{
          title: "Navn som skal vises på knapp",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="Iconet ditt, velg fra autocomplete" color={color} />
          ),
        }}
      /> */}
    </Tabs>
  );
}
