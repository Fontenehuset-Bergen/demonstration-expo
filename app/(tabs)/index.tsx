import { StyleSheet, Text, View, Pressable, TouchableOpacity, Image, ScrollView, TextInput } from "react-native";
import { Card } from "@/components/ui/card";
import { Link } from "expo-router";

export default function Index() {
  return (
    <ScrollView style={styles.body}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>React Native</Text>
        </View>
        <Image style={styles.image} source={require('@/assets/images/rodion-kutsaiev-0VGG7cqTwCo-unsplash.jpg')} />
        <Image style={styles.image} source={{ uri: 'https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=2100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>React Native Workshop</Text>
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
          <Text style={styles.buttonText}>TouchableOpacity</Text>
        </TouchableOpacity>

        <Pressable style={styles.modalButton}>
          <Link href="/modal" style={styles.modalButtonText}>
            Let's open the modal!
          </Link>
        </Pressable>

        <TextInput style={styles.textInputField}></TextInput>
        <Card />
        <Card />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#1C1429',
    padding: 10,
    height: '100%',
  },
  container: {
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#E4DFFF',
    fontSize: 30,
  },
  text: {
    color: '#E4DFFF'
  },
  textContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
    color: '#1C1429',
    fontSize: 18,
  },

  image: {
    width: 300,
    height: 300,
    objectFit: 'cover',
    borderRadius: 10,
  },
  modalButton: {
    width: 180,
    height: 180,
    backgroundColor: '#2F2D56',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 10,
    paddingTop: 10,
    elevation: 20,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  textInputField: {
    backgroundColor: '#E4DFFF',
    width: '90%',
  }
});
