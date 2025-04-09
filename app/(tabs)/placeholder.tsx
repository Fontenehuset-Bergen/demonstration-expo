import { StyleSheet, Text, ScrollView } from "react-native";
import { Drinks, getPosts } from "@/lib/sanity";
import { useEffect, useState } from "react";
import { SmallCard } from "@/components/ui/smallCard";

// Skift UniktNavn til noe du vill ha, BrukDenneNavneStilen
export default function Jan() {
  const [drikker, setDrikker] = useState<Drinks[]>([]);

  useEffect(() => {
    const results = async () => {
	const result = await getPosts()
	//code to return an array. Flatlist is best practice
	if(result) {
	    setDrikker(await getPosts());
	} else {
	    setDrikker([]);
	}
    };

    results()
  }, []);
  return (
    <ScrollView>
      <Text>Dette er din personlige side</Text>
      <Text>her kan du gjøre mye gøy! 🥳</Text>
      {drikker && drikker.map((drink) => <SmallCard key={drink.title} title={drink.title} image={drink.image} />)}
    </ScrollView>
  );
}

// Her kan du lese mer om styles: https://reactnative.dev/docs/style
const styles = StyleSheet.create({
  container: {
    flex: 1, // Flex 1 betyr at denne siden tar opp hele skjermen
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
});
