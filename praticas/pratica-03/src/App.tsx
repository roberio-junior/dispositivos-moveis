import { StyleSheet, Text, View } from 'react-native';
import { Cabecalho } from './components/CabecalhoTurma';
import { ListaTarefas } from './components/ListaTarefas';
import { ResumoAula } from './components/ResumoAula';

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho titulo="Aula 05" subtitulo="Resumo da Aula" />
      <ResumoAula presentes={20} faltas={5} atividades={3} />
      <ListaTarefas
        t1="Estudar para a prova"
        t2="Fazer o exercício de casa"
        t3="Entregar atividade prática"
        t4="Estudar para a próxima aula"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    padding: 20,
    gap: 20,
  },
});
