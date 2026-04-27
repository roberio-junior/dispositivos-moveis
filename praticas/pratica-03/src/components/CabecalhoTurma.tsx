import { Text, View, StyleSheet } from 'react-native';

type CabecalhoProps = {
    titulo: string;
    subtitulo: string;
};

export function Cabecalho({ titulo, subtitulo }: CabecalhoProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.subtitulo}>{subtitulo}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#1d4ed8',
    },
    subtitulo: {
        fontSize: 14,
        color: '#64748b',
    },
});