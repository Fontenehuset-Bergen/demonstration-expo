import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Linking,
} from "react-native";

const openCatPictures = () => {
    Linking.openURL("https://pixabay.com/no/images/search/katter/");
};

// Skift UniktNavn til noe du vill ha, BrukDenneNavneStilen
export default function DetErKattenSin() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Dette er katten sin side</Text>
            <Text style={styles.text}>Her kan katten ha det mye gøy 🐈‍⬛</Text>
            <Image
                source={require("../../assets//images/kattensin.png")}
                style={styles.image}
            />
            <TouchableOpacity style={styles.button} onPress={openCatPictures}>
                <Text style={styles.btntext}>Se bilder av pusekatter</Text>
            </TouchableOpacity>
        </View>
    );
}

// Her kan du lese mer om styles: https://reactnative.dev/docs/style
const styles = StyleSheet.create({
    container: {
        flex: 1, // Flex 1 betyr at denne siden tar opp hele skjermen
        display: "flex",
        gap: 24,
        justifyContent: "center",
        alignItems: "center",
        fontStyle: "italic",
        backgroundColor: "lightpink",
    },
    text: {
        textAlign: "center",
        fontSize: 24,
    },
    title: {
        textAlign: "center",
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 50,
        borderStyle: "solid",
        borderWidth: 10,
        borderColor: "purple",
    },
    button: {
        backgroundColor: "purple",
        padding: 10,
        borderRadius: 10,
    },
    btntext: {
        color: "white",
    },
});
