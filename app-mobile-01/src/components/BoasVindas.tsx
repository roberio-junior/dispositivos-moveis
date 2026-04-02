import { View, Text, StyleSheet } from 'react-native';

export default function BoasVindas() {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                Olá, Robério júnior, seja bem-vindo!
            </Text>
            <Text style={styles.curso}>
                Curso: Tecnologia em Sistemas para a Internet
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    welcome: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    curso: {
        fontSize: 16,
        color: 'gray',
    },
});