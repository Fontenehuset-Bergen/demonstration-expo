import { StyleSheet, Text, View } from "react-native";
import { Drinks, getPosts } from "@/lib/sanity";
import { useEffect, useState } from "react";
import { SmallCard } from "@/components/ui/smallCard";

export default function Coffee() {
  const [drikker, setDrikker] = useState<Drinks[]>();

  useEffect(() => {
    const results = async () => {
      setDrikker(await getPosts());
    };

    results()
  }, []);
  return (
    <View style={styles.container}>
      <Text>Her skal vi vise en kaffeliste</Text>
      { drikker && drikker.map((drink) => <SmallCard key={drink.title} title={drink.title} image={drink.image} />)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
