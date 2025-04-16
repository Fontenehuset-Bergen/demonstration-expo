import { Coffee, getCoffee } from "@/lib/sanity";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

// Skift UniktNavn til noe du vill ha, BrukDenneNavneStilen
export default function TestingKat() {
  //logikk for å hente ting
  const [data, updateData]=useState<Coffee[]>()
  useEffect(()=> {
    async function fetchData() {
      const result = await getCoffee()
      updateData(result)
    }
    fetchData()
  },[])
  return (
    <View style={styles.container}>
      <Text>Dette er din personlige side</Text>
      <Text>her kan du gjøre mye gøy! 🥳</Text>
      {data?.map((item,index)=><Text key={index} >{item.nameofcoffee}</Text>)}
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