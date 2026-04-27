import { Pressable, Text, View } from 'react-native';
import { styles } from '../styles';
import type { CondicaoEntrega } from '../types';

type SeletorCondicaoProps = {
  condicao: CondicaoEntrega;
  onToggle: () => void;
};

function obterTextoCondicao(condicao: CondicaoEntrega) {
  return condicao === 'integra' ? 'Entrega integra' : 'Entrega com avaria';
}

export function SeletorCondicao({ condicao, onToggle }: SeletorCondicaoProps) {
  return (
    <View style={styles.fieldGroup}>
      <Text style={styles.label}>Condicao da entrega</Text>

      <Pressable
        style={[styles.selectorButton, styles.selectorButtonActive]}
        onPress={onToggle}
      >
        <Text style={[styles.selectorButtonText, styles.selectorButtonTextActive]}>
          {obterTextoCondicao(condicao)}
        </Text>
        <Text style={styles.errorText}>
          Toque para alternar a condicao da entrega
        </Text>
      </Pressable>
    </View>
  );
}