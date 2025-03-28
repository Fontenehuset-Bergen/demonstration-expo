import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";
import { Card } from "@/components/ui/cards";
import { Link } from "expo-router";

export default function Stephanie() {
  return (
    <ScrollView style={styles.body}>
      <View style={styles.container}>
        <Image style={styles.bilde} source={require('@/assets/images/portrait.jpg')} />
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Stephanie Reiso</Text>
          <Text style={styles.headerSubtext}>"Greetings, fellow newbies!"</Text>
        </View>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? 'yellow' : '#E4DFFF' }
          ]}
        >
          <Text style={styles.buttonText}>Pressable Button</Text>
        </Pressable>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Touchable Opacity</Text>
        </TouchableOpacity>
        <Pressable style={styles.modalButton}>
          <Link href="/modal" style={styles.modalButtonText}>Let's open the modal!</Link>
        </Pressable>
        <TextInput style={styles.textInputField}></TextInput>
        <Card />
        <Card />
        <Card />
      </View>
    </ScrollView>
  );
}

// Her kan du lese mer om styles: https://reactnative.dev/docs/style
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#1c1429',
    padding: 10,
    height: '100%',
  },
  container: {
    flex: 1, // Flex 1 betyr at denne siden tar opp hele skjermen
    display: "flex",
    gap: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  
  headerContainer: {
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 35,
    fontWeight: "700",
  },
  headerSubtext: {
    color: 'white',
    fontSize: 15,
  },
  title: {
    textAlign: "center",
  },
  button: {
    width: 300,
    backgroundColor: '#E4DFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 600
  },
  bilde: {
    width: 350,
    height: 400,
    objectFit: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 20,
    borderColor: '#ffccea',
    borderWidth: 5,
  },
  modalButton: {
    width: 200,
    height: 200,
    borderRadius: 50,
    backgroundColor: 'pink'

  },
  modalButtonText: {

  },
  textInputField: {
    backgroundColor: '#e4dfff',
    width: '90%',
  },
});