import { StyleSheet, Text, View } from 'react-native';
import { styles } from './styles';

function Indicador({ titulo, valor }: { titulo: string; valor: string }) {
  return (
    <View style={styles.cardIndicador}>
      <Text style={styles.cardTitulo}>{titulo}</Text>
      <Text style={styles.cardValor}>{valor}</Text>
    </View>
  );
}

function Aviso({ texto }: { texto: string }) {
  return (
    <View style={styles.avisoItem}>
      <Text style={styles.avisoTexto}>{texto}</Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Painel da Turma</Text>
        <Text style={styles.subtitulo}>Encontro 05 • Layout e estilos</Text>
      </View>

      <View style={styles.linhaIndicadores}>
        <Indicador titulo="Presentes" valor="24" />
        <Indicador titulo="Atividades" valor="03" />
      </View>

      <View style={styles.listaAvisos}>
        <Text style={styles.secaoTitulo}>Avisos</Text>
        <Aviso texto="Prática 03 será entregue até sexta-feira." />
        <Aviso texto="Revisar materiais do encontro 04." />
        <Aviso texto="Trazer dispositivo para testes presenciais." />
      </View>
    </View>
  );
}