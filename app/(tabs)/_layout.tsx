import FontAwesome from "@expo/vector-icons/FontAwesome";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "pink", tabBarStyle: { backgroundColor: "#1c1429" }, headerStyle: { backgroundColor: "#1c1429" }, headerTintColor: "pink", headerTitleStyle: { fontFamily: "monospace", fontWeight: 900 } }}>
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
          title: "Introduction",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="child" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
