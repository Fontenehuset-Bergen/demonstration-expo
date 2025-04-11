import { Image, StyleSheet, Text, View} from "react-native";
import { Drinks } from "@/lib(sanity";

export function picture({image}: Drinks) {
  return (
    <view>
      <Image source={{ uri: image }} style={style.image}/>
    </view>
  )
}

const style = StyleSheet.create({
  container: {
    display: "flex"
  },
  image: {
    borderRadius: 8
  }
});
