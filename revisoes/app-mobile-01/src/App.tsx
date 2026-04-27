import { StyleSheet, Text, View } from 'react-native';
import { BoasVindas } from './components/BoasVindas';
import { Rodape } from './components/Rodape';
import { CardParticipacao } from './components/CardParticipacao';
import Cadastro from './components/Cadastro';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.header}>Painel Acadêmico do Estudante</Text>
        <BoasVindas nome='Robério Júnior' curso='Tecnología em Sistemas para Internet'/>
        <CardParticipacao materia='Desenvolvimento Mobile' professor='Prof. Luciano Alexandre'/>
        <Cadastro />
      </View>
      <Rodape periodo={5} turma={'2024.1'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
  },
  main: {
    width: '100%',
    alignItems: 'center',
    gap: 10,
  },
  header: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#16A34A'
    }
});
