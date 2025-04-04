import { Image, StyleSheet, Text, View } from "react-native";
import { coffee } from "@/lib/sanity";

export function SmallCard({ nameofcoffee, image, price }: coffee) {
  return (
    <View style={style.container}>
      <Image source={{ uri: image }} style={style.image} />
      <Text>{nameofcoffee}</Text>
      <Text>{price}</Text>
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
