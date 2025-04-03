import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";
import { Card } from "@/components/ui/card";
import { Link } from "expo-router";
import { Drinks, getPersons, getPosts, Person } from "@/lib/sanity";
import { useState, useEffect } from "react";
import { SmallCard } from "@/components/ui/smallCard";
import { PeopleCard } from "@/components/ui/peopleCard";


export default function Stephanie() {
  const [drikker, setDrikker] = useState<Drinks[]>()
  const [people, setPeople] = useState<Person[]>()

  useEffect(() => {
    const results = async () => {
      setDrikker(await getPosts());
      setPeople(await getPersons());
    };
    results()
  }, []);


  return (
    <ScrollView style={styles.body}>
      <View style={styles.container}>
        <Image style={styles.bilde} source={require('@/assets/images/portrait.jpg')} />
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>STEPHANIE REISO</Text>
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

        <View style={styles.headerContainer}>
          <Text style={styles.title}>Modals and Text-Input</Text>
          <Text style={styles.descriptionText}>Adding elements such as modals, text-input fields and the like will add an interactive experience for users.</Text>
        </View>
        <Pressable style={styles.modalButton}>
          <Link href="/modal" style={styles.modalButtonText}>Let's open the modal!</Link>
        </Pressable>
        <TextInput style={styles.textInputField}></TextInput>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Cards</Text>
          <Text style={styles.descriptionText}>The elements below can f.ex. be used in a café menu, adding interactive actions to them and so on.</Text>
          {people && people.slice(0, 5).map((person) => (
            <PeopleCard
              key={person.fullName}
              hobby={person.hobby}
              description={person.description}
              fullName={person.fullName}
              portrait={person.portrait}
            />
          ))}
          {drikker?.slice(0, 5).map((drink) => <SmallCard key={drink.title} allergens={drink.allergens} beskrivelse={drink.beskrivelse} title={drink.title} image={drink.image} />)}
        </View>
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
    paddingBottom: 20,
    // backgroundColor: "yellow",
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
    marginBottom: 20,
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: 600,
    marginTop: 30,
  },
  descriptionText: {
    color: "white",
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
    borderRadius: 100,
    backgroundColor: 'pink',
    alignItems: "center",
    justifyContent: "center",

  },
  modalButtonText: {
    color: "purple",
    fontSize: 18,

  },
  textInputField: {
    backgroundColor: '#e4dfff',
    width: '90%',
    borderRadius: 10,
  },
});