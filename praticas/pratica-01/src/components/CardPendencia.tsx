import { View, Text, StyleSheet } from "react-native"

export function CardPendencia(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Pendências</Text>
            <View style={styles.linha}/>
            <Text style={styles.texto}>- Revisar o conteúdo</Text>
            <Text style={styles.texto}>- Entregar atividade de React</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  titulo: {
    fontWeight: 'bold',
    color: '#ff5e00ff'
  },
    linha: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 10,
  },
    texto: {
        color: '#353535ff'
  }

});