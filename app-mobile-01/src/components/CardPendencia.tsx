import { View, Text, StyleSheet } from 'react-native';

export default function CardPendencia() {
    return (
        <View style={styles.card}>
            <Text style={styles.titulo}>Pendências</Text>
            <Text>- Finalizar atividade de Desenvolvimento de Dispositivos Mobile</Text>
            <Text>- Estudar componentes do React Native</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'gray',
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
});