import { StyleSheet, Text, View } from "react-native";
import { Drinks, getPosts } from "@/lib/sanity";
import { useEffect, useState } from "react";
import { SmallCard } from "@/components/ui/smallCard";

export default function Coffee() {
  const [drikker, setDrikker] = useState<Drinks[]>([]);

  useEffect(() => {
    const results = async () => {
	const result = await getPosts()
	if(result) {
	    setDrikker(await getPosts());
	} else {
	    setDrikker([]);
	}
    };

    results()
  }, []);
  return (
    <View style={styles.container}>
      <Text>Her skal vi vise en kaffeliste</Text>
	{/*drikker &&*/ drikker.map((drink) => <SmallCard key={drink.title} title={drink.title} image={drink.image} />)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
