import { View, Text, StyleSheet } from "react-native";

type Rodape = {
    periodo: number;
    turma: string;
};

export function Rodape({ periodo, turma }: Rodape){
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>{periodo}° Período - Turma {turma}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    texto: {
        fontSize: 15,
        color: '#555',
    }
})