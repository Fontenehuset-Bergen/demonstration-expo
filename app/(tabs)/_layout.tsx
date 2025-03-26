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
        name="kafe"
        options={{
          title: "Kafe",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="coffee" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="placeholder"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="stephanie"
        options={{
          title: "^w^",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="child" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
