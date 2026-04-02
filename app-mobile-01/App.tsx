import { View, StyleSheet } from 'react-native';

import BoasVindas from './src/components/BoasVindas';
import CardProximaAula from './src/components/CardProximaAula';
import CardPendencia from './src/components/CardPendencia';
import Rodape from './src/components/Rodape';

export default function App() {
  return (
    <View style={styles.container}>
      <BoasVindas />
      <CardProximaAula />
      <CardPendencia />
      <Rodape />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});