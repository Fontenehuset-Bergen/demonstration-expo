import { StyleSheet, View, Text } from "react-native";

export function Modal() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> This is our first modal</Text>
        </View>
    );
}

const styles=StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
    },
    text: {
        color: '#E4DFFF',
        fontSize: 20,
    }
})