import { StyleSheet, View, Text } from "react-native";


export default function Modal() {
    return(
        <View>
            <Text style={styles.text}>This is some text</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "orange",
    },
    text: {
        color: 'red',
        fontSize: 20,
    }
})