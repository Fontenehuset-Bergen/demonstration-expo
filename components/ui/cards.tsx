import { Text, View, StyleSheet } from "react-native";
import { MaterialIcons } from "expo/vector-icons";

export function Card() {
    return (
        <View style={styles.container}>
            <View>
                <Text>Jeg er et kort!</Text>
            </View>
        </View>
    )
}

const styles= StyleSheet.create ({
    container: {
        backgroundColor: '#401d32',
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

})