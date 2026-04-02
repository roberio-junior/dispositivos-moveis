import { View, Text, StyleSheet } from 'react-native';

export default function Rodape() {
    return (
        <View style={styles.container}>
            <Text style={styles.rodape}>TSI - 2024.1</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    rodape: {
        fontSize: 12,
        color: 'gray',
    },
});