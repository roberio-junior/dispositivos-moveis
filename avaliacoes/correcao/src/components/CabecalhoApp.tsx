import { Text, View } from 'react-native';
import { styles } from '../styles';

type CabecalhoAppProps = {
  titulo: string;
  subtitulo: string;
};

export function CabecalhoApp({ titulo, subtitulo }: CabecalhoAppProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.appTitle}>{titulo}</Text>
      <Text style={styles.appSubtitle}>{subtitulo}</Text>
    </View>
  );
}