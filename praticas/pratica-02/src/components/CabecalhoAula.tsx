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
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white'
  },
  subtitulo: {
    fontSize: 14,
    color: '#94a3b8',
  },
});