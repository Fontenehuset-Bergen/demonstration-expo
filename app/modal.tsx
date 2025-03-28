import { StyleSheet, View, Text } from "react-native";

// For å få denne typen modal til å fungere, må den lages som en egen side. Sider må eksporteres med "export default function Name()".
export default function Modal(){ 
    return(
        <View style={styles.container}>
            <Text style={styles.text}>This is our first modal</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#574484',
    },
    text: {
        color: '#E4DFFF',
        fontSize: 20,
    }
})