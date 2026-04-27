import { View, Text, StyleSheet } from 'react-native';

type ResumoProps = {
    presentes: number;
    faltas: number;
    atividades: number;
};

export function ResumoAula({ presentes, faltas, atividades }: ResumoProps) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.numero}>{presentes}</Text>
                <Text style={styles.label}>Presentes</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.numero}>{faltas}</Text>
                <Text style={styles.label}>Faltas</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.numero}>{atividades}</Text>
                <Text style={styles.label}>Atividades</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    card: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        elevation: 2,
    },
    numero: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1d4ed8',
    },
    label: {
        fontSize: 12,
        color: '#64748b',
        marginTop: 4,
    },
});