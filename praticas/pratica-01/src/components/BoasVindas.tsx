import { View, Text, StyleSheet } from "react-native";

export function BoasVindas(){
    return (
        <View>
            <Text style={styles.name}>Olá, Robério Júnior!</Text>
            <Text style={styles.calss}>Tecnologia em Sistemas para Internet</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#036800ff'
    },

    calss: {
        fontSize: 16,
        color: '#555',
    }
})