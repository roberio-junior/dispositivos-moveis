import { Text, View, StyleSheet } from 'react-native';

type ParticipacaoProps = {
  nome: string;
  participacoes: number;
};

export function CardParticipacao({ nome, participacoes }: ParticipacaoProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.cardNumber}>{participacoes}</Text>
      <Text style={styles.cardLabel}>Participações</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#1e293b',
    alignItems: 'center'
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#cbd5f5'
  },
  cardNumber: {
    fontSize: 50,
    color: '#38bdf8'
  },
  cardLabel: {
    fontSize: 16,
    color: '#94a3b8'
  },
});