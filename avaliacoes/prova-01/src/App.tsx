import { StyleSheet, Text, View } from 'react-native';
import { Cabecalho } from './components/Cabecalho';
import { Form } from './components/Form'
import { Seletor } from './components/Seletor';
import { Painel } from './components/Painel';

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho/>
      <Form/>
      <Seletor/>
      <Painel responsavel='' codigo='' quantidade='' condicao='' situacao=''/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
