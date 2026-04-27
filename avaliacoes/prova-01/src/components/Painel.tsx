import { StyleSheet, Text, View } from 'react-native';

type PainelProps = {
  responsavel: string;
  codigo: string;
  quantidade: string;
  condicao: string;
  situacao: string;
};

export function Painel({responsavel, codigo, quantidade, condicao, situacao}: PainelProps) {
  return (
    <View style={styles.cabecalho}>
      <Text style={styles.titulo}>Painel de Resumo</Text>
      <Text style={styles.subtitulo}>Responssável: {responsavel}</Text>
      <Text style={styles.subtitulo}>Código: {codigo}</Text>
      <Text style={styles.subtitulo}>Quantidade de volumes: {quantidade}</Text>
      <Text style={styles.subtitulo}>Condição selecionada: {condicao}</Text>
      <Text style={styles.subtitulo}>Situação geral: {situacao}</Text>
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