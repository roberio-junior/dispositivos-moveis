import { useState } from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';

type CardParticipacaoProps = {
    materia: string;
    professor: string;
};

function Mensagem({ participacoes }: { participacoes: number }) {
  let texto;

  if (participacoes === 0) {
    texto = "Vamos começar?";
  } 
  else if (participacoes <= 3) {
    texto = "Boa participação!";
  } 
  else {
    texto = "Excelente ritmo hoje!";
  }

  return <Text style={styles.mensagem}>{texto}</Text>;
}

export function CardParticipacao({ materia, professor }: CardParticipacaoProps) {
    const [participacoes, setParticipacoes] = useState(0);

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Participação em Aulas</Text>

            <View style={styles.section}>
                <View style={styles.cardInfo}>
                    <Text style={styles.nome}>{materia}</Text>
                    <Text style={styles.subtitulo}>{professor}</Text>
                    <Text style={styles.numero}>{participacoes}</Text>
                    <Text style={styles.subtitulo}>Participações</Text>
                </View>
                
                <View style={styles.cardActions}>
                    <Mensagem participacoes={participacoes} />
                    
                    <View style={styles.buttons}>
                        <Pressable style={styles.button} onPress={() => setParticipacoes(participacoes + 1)}>
                            <Text style={styles.textButton} selectable={false}>+ Incrementar</Text>
                        </Pressable>
                    
                        <Pressable style={styles.button} onPress={() => setParticipacoes(0)}>
                            <Text style={styles.textButton} selectable={false}>Zerar</Text>
                        </Pressable>
                    </View>
                </View>

            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    mensagem: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#6736bdff',
    },
    container: {
        width: '100%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#6736bdff',
        padding: 10,
        gap: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#6736bdff',
    },
    section: {
        flexDirection: 'row',
        gap: 10,
    },
    cardInfo: {
        flex: 1,
        padding: 10,
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EDE9FE',
        borderRadius: 10,
    },
    nome: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#6736bdff',
        textAlign: 'center'
    },
    subtitulo: {
        fontSize: 10,
        color: '#3a3a3aff',
    },
    numero: {
        color: '#6736bdff',
        fontWeight: 'bold',
        fontSize: 40,
    },
    cardActions: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#6736bdff',
        gap: 10,
        padding: 10
    },
    buttons: {
        gap: 10,
        width: '100%'
    },
    button: {
        backgroundColor: '#6736bdff',
        color: 'white',
        padding: 10,
        borderRadius:10,
        alignItems: 'center',
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold'
    }
});