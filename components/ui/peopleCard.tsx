import { Image, Text, View, StyleSheet, Pressable } from "react-native"
import { Person } from "@/lib/sanity"
import { MaterialIcons } from "@expo/vector-icons";

export function PeopleCard({ fullName, portrait, description, hobby }: Person) {
    return (
        <View style={style.container}>

            <View style={style.card}>
                <View style={style.cardBox}>
                    <View style={style.imageBackground}>
                        <Image source={{ uri: portrait }} style={style.image} />
                    </View>
                    <View style={style.textContainer}>
                        <View style={style.plusContainer}>
                            <Text style={style.title}>{fullName}</Text>
                            <Pressable style={style.plusButton}>
                                <MaterialIcons name="add-reaction" color="white" size={25} />
                            </Pressable>

                        </View>

                        <Text style={style.description}>{description}</Text>

                        <View style={style.allergenBox}>
                            {hobby ? (
                                <Text style={style.allergens}>Hobbies: {hobby.join(", ")}</Text>
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
        height: 180,
        gap: 12,
        alignItems: "center",
        margin: 10,
        padding: 7,
        borderRadius: 10,
        borderTopLeftRadius: 3,
        borderBottomRightRadius: 3,
        backgroundColor: "pink",
    },
    cardBox: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: 165,
        gap: 12,
        alignItems: "center",
        // margin: 10,
        padding: 10,
        paddingLeft: 0,
        borderRadius: 10,
        borderBottomRightRadius: 0,
        backgroundColor: "white",

    },
    imageBackground: {
        backgroundColor: "pink",
        width: 118,
        height: 118,
        borderRadius: 100,
        borderTopLeftRadius: 0,
        top: -29,
        left: -6,
        alignItems: "center",
        justifyContent: "center",

    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 100,
        borderColor: "white",
        borderWidth: 3,
        // elevation: 1,
        // top: 5,
        // left: 5,
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
        color: "deeppink",
        fontSize: 20,
        fontWeight: 900,
        fontFamily: "monospace",
        left: 15,
        top: 5,
        // backgroundColor: "yellow",
        width: "80%",
    },
    description: {
        color: "#1c1429",
        fontSize: 15,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "yellow",
        width: "85%",
        height: 70,
        top: -5,
    },
    allergenBox: {
        height: 20,
        justifyContent: "center",
        left: -120,
        // backgroundColor: "yellow",

    },
    allergens: {
        color: "#1c1429",
        fontSize: 12,
        // fontWeight: 600,
        // backgroundColor: "yellow",
    },
    plusContainer: {
        flexDirection: "row",
        width: "100%",
        height: 30,
        justifyContent: "space-between",
        alignItems: "center",
        left: -15,
        top: -15,
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