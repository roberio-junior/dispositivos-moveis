import { View, Text, StyleSheet } from "react-native"

export function CardProximaAula (){
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Próxima Aula: Props, estado e eventos</Text>
            <View style={styles.linha} />
            <Text style = {styles.description}>Na próxima aula iremos aprender como criar componentes reutilizáveis com props, controlar dados mutáveis com useState e responder a ações do usuário com Pressable, Button e TextInput.</Text>
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
    title: {
        fontWeight: 'bold',
        color: '#1100ffff',
    },
    description: {
        color: '#353535ff'
    },
    linha: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 10,
    }
})