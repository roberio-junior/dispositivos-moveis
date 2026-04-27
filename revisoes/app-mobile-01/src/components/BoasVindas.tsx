import { View, Text, StyleSheet } from "react-native";

type BoasVindasProps = {
    nome: string;
    curso: string;
};

export function BoasVindas({ nome, curso }: BoasVindasProps){
    return (
        <View style= {styles.container}>
            <Text style={styles.titulo}>Olá, {nome}!</Text>
            <Text style={styles.subtitulo}>{curso}</Text>
            <Text style={styles.subtitulo}>Seja bem vindo ao seu painel acadêmico.</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        width: '100%',
        backgroundColor: '#DBEAFE',
        padding: 20,
        gap: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#2563EB',
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1E3A8A'
    },

    subtitulo: {
        fontSize: 15,
        color: '#555',
    }
})