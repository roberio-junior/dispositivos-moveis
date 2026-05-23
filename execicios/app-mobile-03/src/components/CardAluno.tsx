import { Pressable, Text, View } from 'react-native';
import { styles } from '../styles';

type CardAlunoProps = {
    nome: string;
    presente: boolean;
    onAlternarPresenca: () => void;
}

export function CardAluno({ nome, presente, onAlternarPresenca }: CardAlunoProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.status}>{presente ? 'Presente' : 'Ausente'}</Text>

      <Pressable style={styles.botao} onPress={onAlternarPresenca}>
        <Text style={styles.botaoTexto}>Alternar presença</Text>
      </Pressable>
    </View>
  );
}
