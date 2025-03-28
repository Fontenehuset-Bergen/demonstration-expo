import { Image, StyleSheet, Text, View } from "react-native";
import { Drinks } from "@/lib/sanity";

export function SmallCard({ title, image }: Drinks) {
  return (
    <View style={style.container}>
      <Image source={{ uri: image }} style={style.image} />
      <Text>{title}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    gap: 12,
    alignItems: "center"
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 8
  }
});
