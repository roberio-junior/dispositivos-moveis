import { StyleSheet, View } from 'react-native';
import { Cabecalho } from './components/Cabecalho';
import { CardDisciplina } from './components/CardDisciplina';
import { Rodape } from './components/Rodape';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Cabecalho />
        <CardDisciplina />
      </View>
      <Rodape />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 12,
    backgroundColor: '#f5f7fa',
    justifyContent: 'space-between'
  },
});