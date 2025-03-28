import { StyleSheet, Text, View, Pressable, TouchableOpacity, ScrollView, Image, Modal } from "react-native";
import { Card } from "@/components/card";
import { Link } from "expo-router";

export default function Index() {
  return (
    <ScrollView>
    <View style={styles.container}>


      <Text style={styles.headerText}>Fontenehuset Bergen</Text>
      <Image style={styles.bilde} source={require('@/assets/images/img34.jpg')}></Image>
      <Pressable style={styles.pressableButton}>
        <Text>Knapp</Text>
      </Pressable>
      <TouchableOpacity style={styles.pressableButton}>
        <Text>Touchable Knapp</Text>
      </TouchableOpacity>
      <Pressable style={styles.modalButton}>
        <Link href="/modal" style = {styles.modalButtonText}>
        Let's open the modal!
        </Link>
      </Pressable>


      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pressableButton: {
    width: 100,
    height: 50,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 5,
  },
  bilde: {
    width: 300,
    height: 300,
    objectFit: 'cover',
    borderRadius: 10,
  },
  headerText: {
    fontSize: 40,
    color: 'orange',
  },
  modalButton: {
    backgroundColor: "white",
    borderRadius: 50,
  },
  modalButtonText: {
    color: "red",
  }
});
