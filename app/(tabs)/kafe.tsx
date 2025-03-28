import { StyleSheet, Text, View } from "react-native";
import { Drinks, getPosts } from "@/lib/sanity";
import { useEffect, useState } from "react";

export default function Coffee() {
  const [drikker, setDrikker] = useState<Drinks[]>();

  useEffect(() => {
    const results = async () => {
      setDrikker(await getPosts());
    };

    results()

    console.log(drikker)
  }, []);
  return (
    <View style={styles.container}>
      <Text>Her skal vi vise en kaffeliste</Text>
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
