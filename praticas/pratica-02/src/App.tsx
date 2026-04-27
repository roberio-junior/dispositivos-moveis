import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Cabecalho } from './components/CabecalhoAula';
import { CardParticipacao } from './components/CardParticipacao';
import { useState } from 'react';

function Mensagem({ participacoes }: { participacoes: number }) {
  let texto;

  if (participacoes === 0) {
    texto = "Vamos começar?";
  } 
  else if (participacoes <= 3) {
    texto = "Boa participação!";
  } 
  else {
    texto = "Excelente ritmo hoje!";
  }

  return <Text style={styles.mensagem}>{texto}</Text>;
}

export default function App() {
  const [participacoes, setParticipacoes] = useState(0);

  return (
    <View style={styles.container}>
      <Cabecalho 
        titulo="Aula 04" 
        subtitulo="Props, estado e eventos" 
      />

      <CardParticipacao 
        nome="Robério" 
        participacoes={participacoes} 
      />
      <View style={styles.buttons}>
        <Pressable style={styles.button} onPress={() => setParticipacoes(participacoes + 1)}>
          <Text selectable={false}>+ Incrementar</Text>
        </Pressable>
      
        <Pressable style={styles.button} onPress={() => setParticipacoes(0)}>
          <Text selectable={false}>Zerar</Text>
        </Pressable>
      </View>

      <Mensagem participacoes={participacoes} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    padding: 20,
    gap: 10
  },
  buttons: {
    gap: 10,
    flexDirection: 'row',
    width: '100%'
  },
  button: {
    flex: 1,
    backgroundColor: '#38bdf8',
    color: '#1e293b',
    padding: 10,
    borderRadius:10,
    alignItems: 'center'
  },
  mensagem: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#cbd5f5'
  },
});