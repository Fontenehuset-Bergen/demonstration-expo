import { Image, Text, View, StyleSheet, Pressable } from "react-native"
import { Person } from "@/lib/sanity"
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";



export function PeopleModal({ fullName, portrait, description, hobby, country }: Person) {
    const [icon, setIcon] = useState(false)


    return (
        <View style={style.container}>

                <View style={style.card}>
                    <View style={style.cardBox}>
                        <View>
                            <Image source={{ uri: portrait }} style={style.image} />
                        </View>
                        <View style={style.textContainer}>
                            <View style={style.plusContainer}>
                                <Text style={style.title}>{fullName}</Text>
                                <Pressable onPress={() => setIcon(!icon)} style={style.plusButton}>
                                    <MaterialIcons
                                        name={icon ? "add-reaction" : "emoji-emotions"}
                                        color={icon ? 'pink' : 'deeppink'}
                                        size={25}
                                    />
                                </Pressable>

                            </View>

                            <Text style={style.description}>{description}</Text>

                            <View style={style.hobbyBox}>

                                {country ? (
                                    <Text style={style.hobby}>Country: {country}</Text>
                                ) : null
                                }
                                {hobby ? (
                                    <Text style={style.hobby}>Hobbies: {hobby.join(", ")}</Text>
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
        // backgroundColor: "yellow",
        width: "70%",
    },
    card: {
        width: 300,
        height: 600,
        gap: 12,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        padding: 7,
        borderRadius: 10,
        borderTopLeftRadius: 3,
        borderBottomRightRadius: 3,
        backgroundColor: "pink",
    },
    cardBox: {
        // display: "flex",
        // flexDirection: "row",
        width: "100%",
        height: "100%",
        gap: 20,
        alignItems: "center",
        // justifyContent: "center",
        // margin: 10,
        padding: 20,
        // paddingLeft: 0,
        borderRadius: 10,
        borderBottomRightRadius: 0,
        backgroundColor: "white",

    },
    imageBackground: {
        backgroundColor: "pink",
        width: 180,
        height: 180,
        borderRadius: 100,
        borderTopLeftRadius: 0,
        alignItems: "center",
        justifyContent: "center",

    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        elevation: 3,
        // top: 5,
        // left: 5,
        // borderLeftWidth: 1,
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        // justifyContent: "space-evenly",
        width: "90%",
        // height: 120,
        gap: 10,
        // height: "100%",
        // justifyContent: "space-between",
        // backgroundColor: "green",
    },
    title: {
        color: "deeppink",
        fontSize: 20,
        fontWeight: 900,
        fontFamily: "monospace",
        // left: 15,
        // top: 5,
        // backgroundColor: "yellow",
        width: "80%",
    },
    description: {
        color: "#1c1429",
        fontSize: 15,
        // alignItems: "center",
        // justifyContent: "center",
        // backgroundColor: "yellow",
        width: "100%",
        height: 200,
        // top: -5,
    },
    hobbyBox: {
        height: 20,
        alignItems: "center",
        // justifyContent: "flex-end",
        // left: -120,
        // backgroundColor: "yellow",

    },
    hobby: {
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
        // left: -15,
        // top: -15,
        // alignItems: "flex-end",
    },
    plusButton: {
        width: 25,
        height: 25,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",

    },
})