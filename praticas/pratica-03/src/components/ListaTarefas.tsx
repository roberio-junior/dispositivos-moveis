import { View, StyleSheet, Text } from "react-native";

type TarefasProps = {
    t1: string;
    t2: string;
    t3: string;
    t4: string;
};

export function ListaTarefas({ t1, t2, t3, t4 }: TarefasProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de Tarefas</Text>
            <View style={styles.itens}>
                <Text style={styles.tarefa}>1. {t1}</Text>
                <Text style={styles.tarefa}>2. {t2}</Text>
                <Text style={styles.tarefa}>3. {t3}</Text>
                <Text style={styles.tarefa}>4. {t4}</Text>
            </View>
        </View>);
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 12,
        elevation: 2,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#1d4ed8',
    },
    itens: {
        gap: 8,
    },
    tarefa: {
        backgroundColor: '#f1f5f9',
        padding: 10,
        borderRadius: 8,
        fontSize: 14,
    },
});