import { StyleSheet, Text, View } from "react-native";
import { coffee, getPosts } from "@/lib/sanity";
import { useEffect, useState } from "react";
import { SmallCard } from "@/components/ui/smallCard";

export default function Coffee() {
  const [drikker, setDrikker] = useState<coffee[]>();

  useEffect(() => {
    const results = async () => {
      setDrikker(await getPosts());
    };

    results()
  }, []);
  return (
    <View style={styles.container}>
      { drikker && drikker.map((drink) => <SmallCard key={drink.nameofcoffee} nameofcoffee={drink.nameofcoffee} image={drink.image} price={drink.price} />)}
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
