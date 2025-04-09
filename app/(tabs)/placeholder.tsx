import { StyleSheet, Text, View } from "react-native";
import { Drinks, getPosts } from "@/lib/sanity";
import { useEffect, useState } from "react";
import { SmallCard } from "@/components/ui/smallCard";

// Skift UniktNavn til noe du vill ha, BrukDenneNavneStilen
export default function UniktNavn() {
  const [drikker, setDrikker] = useState<Drinks[]>([]);

  useEffect(() => {
    const results = async () => {
      const result =  await getPost()
    };
    results()
  }, []);

  return (
    <View style={styles.container}>
      <Text>Dette er din personlige side</Text>
      <Text>her kan du gjøre mye gøy! 🥳</Text>
      {drikker && drikker.map((drink) => <smallcard key={drink.title} title={drink.title} image={drink.image} />)}
    </View>
  );
}

// Her kan du lese mer om styles: https://reactnative.dev/docs/style
const styles = StyleSheet.create({
  container: {
    flex: 2, // Flex 1 betyr at denne siden tar opp hele skjermen
    justifyContent: "center",
    alignItems: "center",
  },
});
