import { View, Text, StyleSheet } from "react-native";

export function Rodape(){
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>5° Período(2024.1)</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        alignItems: 'center',
    },
    text: {
        color: '#555555',
    }
})