import { Text, View, StyleSheet, ScrollView, Image, Pressable, TouchableOpacity, SafeAreaView, TextInput, } from "react-native";
import { Link } from 'expo-router';

export default function Index() {

  return (

    <SafeAreaView>
      <ScrollView style={styles.body}>
        <View style={styles.mainContainer}>
          <View style={styles.pageHeaderContainer}>
            <Text style={styles.pageHeaderText}>React Native</Text>
          </View>
          <Image source={require('@/assets/images/rodion-kutsaiev-0VGG7cqTwCo-unsplash.jpg')} style={styles.image} />

          <View style={styles.textContainer}>
            <Text style={styles.text}>Velkommen til Workshop</Text>
          </View>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? 'yellow' : '#E4DFFF', padding: 10 }
            ]}>
            <Text style={styles.buttonText}>This is a Pressable button</Text>
          </Pressable>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              This is TouchableOpacity
            </Text>
          </TouchableOpacity>
          <Pressable style={styles.modalButton}>
            <Link href="/modal" style={styles.modalButtonText}>
            Let's open the modal!
            </Link>
          </Pressable>
          <TextInput style={styles.textInputField}>Write your own text here</TextInput>
          <Text style={styles.text}>If you want to see how far you can scroll, fill the page with as much as you can</Text>
          <Image source={require('@/assets/images/shahadat-rahman-BfrQnKBulYQ-unsplash.jpg')} style={styles.image} />
        </View>

      </ScrollView>

    </SafeAreaView>

  );
}


const styles = StyleSheet.create({
  body: {
    backgroundColor: '#1C1429',
    padding: 10,
    height: '100%',
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  pageHeaderContainer: {
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',

  },
  pageHeaderText: {
    color: '#E4DFFF',
    fontSize: 30,
  },
  textContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#E4DFFF',
  },
  image: {
    width: 300,
    height: 300,
    objectFit: 'fill',
    borderRadius: 10,
    marginBottom: 20,
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
  modalButton: {
    width: 300,
    backgroundColor: '#2F2D56',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  textInputField: {
    backgroundColor: '#E4DFFF',
    width: '90%',
  },

});
