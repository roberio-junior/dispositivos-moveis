import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';


export function Seletor() {
    const [condicao, setCondicao] = useState('Íntegra')
  return (
    <View style={styles.card}>
      <Text style={styles.status}>Entrega {condicao}</Text>

      <Pressable style={styles.botao} onPress={() => setCondicao('íntegra')}>
        <Text style={styles.botaoTexto}>Entrega íntegra</Text>
      </Pressable>
      <Pressable style={styles.botao} onPress={() => setCondicao('com Avaria')}>
        <Text style={styles.botaoTexto}>Entrega com Avaria</Text>
      </Pressable>
    </View>
  );

}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    gap: 8,
  },
  status: {
    fontSize: 14,
    color: '#374151',
  },
  botao: {
    marginTop: 8,
    backgroundColor: '#0f766e',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#ffffff',
    fontWeight: '600',
  },
});