import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
            <Tabs.Screen
                name='index'
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome size={28} name='home' color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name='kafe'
                options={{
                    title: "Kafe",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome size={28} name='coffee' color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name='placeholder'
                options={{
                    href: null,
                }}
            />
            {/* Du kan bruke seksjonen under til å lage din egen knapp til din side, følg beskrivelsen i feltene */}
            <Tabs.Screen
                name='deterkattensin'
                options={{
                    title: "Det er katten sin",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome size={28} name='angellist' color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
