import { StyleSheet, Text, View } from "react-native";
import { coffee, getPosts } from "@/lib/sanity";
import React, { useEffect, useState } from "react";
import { SmallCard } from "@/components/ui/smallCard";

export default function Coffee() {
  const [isLoading, setIsLoading] = useState(true);
  const [drikker, setDrikker] = useState<coffee[]>();

  useEffect(() => {
    const results = async () => {
      try {
        setIsLoading(true);
        const data = await getPosts();
        setDrikker(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setIsLoading(false);
      }
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
