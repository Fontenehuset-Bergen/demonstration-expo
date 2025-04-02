import { Image, Text, View, StyleSheet, Pressable } from "react-native"
import { Drinks } from "@/lib/sanity"
import { MaterialIcons } from "@expo/vector-icons";

export function SmallCard({ title, image, beskrivelse, allergens }: Drinks) {
    return (
        <View style={style.container}>

            <View style={style.card}>
                <View style={style.cardBox}>
                    <Image source={{ uri: image }} style={style.image} />
                    <View style={style.textContainer}>
                        <View style={style.plusContainer}>
                            <Text style={style.title}>{title}</Text>
                            <Pressable style={style.plusButton}>
                                <MaterialIcons name="add" color="white" size={25} />
                            </Pressable>

                        </View>

                        <Text style={style.description} numberOfLines={3}>{beskrivelse}</Text>

                        <View style={style.allergenBox}>
                            {allergens ? (
                                <Text style={style.allergens}>Allergener: {allergens}</Text>
                            ) : null
                            }
                        </View>


                    </View>


                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    card: {
        width: "90%",
        gap: 12,
        alignItems: "center",
        margin: 10,
        padding: 7,
        borderRadius: 10,
        backgroundColor: "pink",
    },
    cardBox: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        gap: 12,
        alignItems: "center",
        // margin: 10,
        padding: 10,
        paddingLeft: 0,
        borderRadius: 10,
        backgroundColor: "white",

    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 100,
        borderTopLeftRadius: 0,
        // borderBottomLeftRadius: 0,
        // borderTopRightRadius: 0,
        borderColor: "pink",
        borderWidth: 3,
        top: -10,
        left: 5,
        // borderLeftWidth: 1,
        // elevation: 2,
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        // justifyContent: "space-evenly",
        width: "65%",
        height: 120,
        gap: 10,
        // height: "100%",
        justifyContent: "space-between",
        // backgroundColor: "green",
    },
    title: {
        fontWeight: 600,
        color: "black",
        fontSize: 25,
        left: 5,
        top: 5,
    },
    description: {
        color: "black",
        fontSize: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    allergenBox: {
        height: 20,
        justifyContent: "flex-end",
        left: -100,

    },
    allergens: {
        color: "black",
        fontSize: 12,
        fontWeight: 600,
        // backgroundColor: "yellow",
    },
    plusContainer: {
        flexDirection: "row",
        width: "100%",
        height: 30,
        justifyContent: "space-between",
        alignItems: "center",
        left: -5,
        top: -5,
        // alignItems: "flex-end",
    },
    plusButton: {
        width: 25,
        height: 25,
        borderRadius: 20,
        backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center",

    },
})