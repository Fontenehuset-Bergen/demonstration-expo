import {Text, View, StyleSheet} from "react-native";

export function Card() {
    return(
        <View style={styles.container}>
            <View>
                <Text>Jeg er et cort</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        width: 100,
        height: 50,
        margin: 10,
    }
})