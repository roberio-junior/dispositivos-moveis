import { StyleSheet, Text, View } from 'react-native';

export function Cabecalho() {
  return (
    <View style={styles.cabecalho}>
      <Text style={styles.titulo}>Resgistro de Vistoria</Text>
      <Text style={styles.subtitulo}>Descrição: Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cabecalho: {
    alignItems: 'center',
    marginBottom: 8,
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
  },
  subtitulo: {
    fontSize: 14,
    color: '#4b5563',
  },
});