import { useState } from 'react';
import { View } from 'react-native';
import { CardAluno } from './components/CardAluno';
import { styles } from './styles';

export default function App() {
  const [presente, setPresente] = useState(false);

  function alternarPresenca() {
    setPresente((valorAtual) => !valorAtual);
  }

  return (
    <View style={styles.container}>
      <CardAluno
        nome="Aluno Exemplo"
        presente={presente}
        onAlternarPresenca={alternarPresenca}
      />
    </View>
  );
}

