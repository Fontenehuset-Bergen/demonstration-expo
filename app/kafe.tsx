import { StyleSheet, Text, View } from "react-native";

export default function Coffee() {
  return (
    <View style={styles.container}>
      <Text>Her skal vi vise en kaffeliste</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
