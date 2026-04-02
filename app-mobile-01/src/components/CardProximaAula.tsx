import { View, Text, StyleSheet } from 'react-native';

export default function CardProximaAula() {
    return (
        <View style={styles.card}>
            <Text style={styles.titulo}>Próxima Aula</Text>
            <Text>Na próxima aula, daremos continuidade ao estudo de React Native.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#c9c9c9ff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
});