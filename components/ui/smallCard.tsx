import { Coffee } from "@/lib/sanity";
import { Image, Text, View } from "react-native";
interface SmallCardProps extends Coffee{

}
export function SmallCard({image, nameofcoffee, price}:SmallCardProps) {
return <View>
<Image source={{uri:image}} height={100} width={100
    
}/>
<Text >{nameofcoffee} </Text>
<Text >{price} </Text>
</View>
}