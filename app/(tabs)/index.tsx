import { StyleSheet, Text, View, Pressable, TouchableOpacity, Image, ScrollView, TextInput } from "react-native"; // React Native har et innebygget komponentbibliotek. For å ta i bruk komponentene må de importeres.  
import { Card } from "@/components/ui/card"; // Dette er import av komponenten Card, som er laget i en egen fil. 
import { Link } from "expo-router"; // Dette er import av Link-komponenten til Expo-biblioteket, som gjør det mulig å linke til fil-lokasjonen til modalen jeg valgte å lage. 

export default function Index() { // Når man lager en side i React Native må man lage en funksjon som kan eksporteres. 

  return ( // Det som vises på skjermen din skrives inne i feltet return. 

    <ScrollView style={styles.body}> 
    {/* ScrollView brukes for å sikre at man kan rulle på siden hvis innholdet er lengre enn skjermen. 
    Hvis du ønsker at feks en overskrift skal være sticky/ikke scrolle med resten av innholdet, legges denne koden utenfor ScrollView i sin egen View som wrapper hele teksten i return-feltet */}

      <View style={styles.container}> 
        {/* View er som en <Div>, og kan inneholde forskjellige andre komponenter, styling osv. */}

        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>React Native</Text>
        </View>

        <Image style={styles.image} source={require('@/assets/images/rodion-kutsaiev-0VGG7cqTwCo-unsplash.jpg')} />
        {/* Bilder kan importeres lokalt fra en mappe i prosjektet ditt, og bruker da require pluss fil-lokasjon. */}

        <Image style={styles.image} source={{ uri: 'https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=2100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
        {/* Bilder kan også hentes fra eksterne kilder som en url, for det bruker man uri pluss linken til bildet. Pass på at du får en fullstendig bilde-url for at det skal fungere.  */}

        <View style={styles.textContainer}>
          <Text style={styles.text}>React Native Workshop</Text>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? 'yellow' : '#E4DFFF' }
          ]}
        >
          {/* En pressable er en type knapp (Button) som kan tilpasses mye i forhold til funksjon og utseende. 
          I dette eksemplet henter den styling først fra styles.button, før det spesifiseres at bakgrunnsfargen skal være forskjellig om knappen er trykket inn eller ikke. 
          Styling lagt inn før kolon er effekten som blir aktivert når du trykker på knappen. */}

          <Text style={styles.buttonText}>Pressable Button</Text>
        </Pressable>


        <TouchableOpacity style={styles.button}>
          {/* TouchableOpacity er en annen type knapp som reduserer synligheten til knappen når den trykkes på. Denne komponenten er direkte hentet fra bibliotek. */}
          <Text style={styles.buttonText}>TouchableOpacity</Text>
        </TouchableOpacity>

        <Pressable style={styles.modalButton}>
          <Link href="/modal" style={styles.modalButtonText}>
            Let's open the modal!
          </Link>
          {/* Dette er en enkel type modal som er laget i en annen fil, og importert øverst på denne siden. Det finnes også en innebygget Modal-komponent i React Native biblioteket. */}
        </Pressable>

        <TextInput style={styles.textInputField}></TextInput>

        <Card />
        <Card />
        {/* Her hentes to komponenter som er laget i et eget dokument, og importert øverst på denne siden. For å vise komponentene holder det å skrive < Navnet på komponenten />. 
        Komponenter kan hete det man selv ønsker, men et beskrivende navn er alltid en god idé. */}
      </View>
    </ScrollView>

  );
}

// Dette er stylingen som er brukt på denne siden. Fordi dette er CSS skrevet i JavaScript må man huske å bruke camelCase og komma etter hver del. 
// camelCase betyr et sammensatt ord med liten forbokstav og stor bokstav i neste del, altså ingen bruk av bindestrek og lignende.
// Det er mulig å lage styling i et annet dokument, i så fall må man importere det på samme måte som andre importer.
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
