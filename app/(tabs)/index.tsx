import { StyleSheet, Text, View, Pressable, Image} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Her skal vi en vanlig start side</Text>
      
      <Pressable style={styles.pressableButton}>
        <Text style={styles.buttonText}>Her er en tekst</Text>
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
    padding: 20,
    width: 100,
    height: 20,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,

  },

  buttonText:{
    fontSize: 12,
    fontStyle: 'normal',
    color: 'black'
  },

});
