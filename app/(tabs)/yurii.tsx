import { StyleSheet, Text, View } from "react-native";

// Skift UniktNavn til noe du vill ha, BrukDenneNavneStilen
export default function Yurii() {
  return (
    <View style={styles.container}>
      <Text>Dette er din personlige side</Text>
      <Text>her kan du gjøre mye gøy! 🥳</Text>
    </View>
  );
}

// Her kan du lese mer om styles: https://reactnative.dev/docs/style
const styles = StyleSheet.create({
  container: {
    flex: 1, // Flex 1 betyr at denne siden tar opp hele skjermen
    display: "flex",
    gap: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
  },
});