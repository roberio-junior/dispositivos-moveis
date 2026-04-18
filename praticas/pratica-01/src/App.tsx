import { StyleSheet, Text, View } from 'react-native';
import { BoasVindas } from './components/BoasVindas';
import { CardProximaAula } from './components/CardProximaAula';
import { CardPendencia } from './components/CardPendencia';
import { Rodape } from './components/Rodape';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <BoasVindas/>
        <CardProximaAula/>
        <CardPendencia/>
      </View>
      <Rodape/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#d8dae6ff',
    justifyContent: 'space-between'
  }
});
