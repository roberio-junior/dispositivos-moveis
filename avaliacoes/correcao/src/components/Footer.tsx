import { Text, View } from 'react-native';
import { styles } from '../styles';

type FooterProps = {
  nomeAluno: string;
  matricula: string;
};

export function Footer({ nomeAluno, matricula }: FooterProps) {
  return (
    <View style={styles.card}>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Aluno: {nomeAluno}</Text>
        <Text style={styles.footerText}>Matricula: {matricula}</Text>
      </View>
    </View>
  );
}