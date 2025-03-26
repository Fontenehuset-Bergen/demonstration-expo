import { StyleSheet, Text, View, Pressable } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Her skal vi en vanlig start side</Text>
      <Pressable style={styles.pressableButton}>
        <Text> Knapp?</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pressableButton: {
    width: 300,
    height: 180,
    backgroundColor: 'blue',
}
});
