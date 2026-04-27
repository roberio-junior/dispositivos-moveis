import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

type FormData = {
  nome: string;
  matricula: string;
  email: string;
  tema: string;
};

type FormErrors = {
  nome?: string;
  matricula?: string;
  email?: string;
  tema?: string;
};

function validar(dados: FormData): FormErrors {
  const erros: FormErrors = {};

  if (!dados.nome.trim()) {
    erros.nome = 'Nome é obrigatório.';
  } else if (dados.nome.trim().length < 3) {
    erros.nome = 'Nome deve ter ao menos 3 caracteres.';
  }

  if (!dados.matricula.trim()) {
    erros.matricula = 'Informe sua matricula.';
  } else if (dados.matricula.trim().length < 14){
    erros.matricula = 'Matricula deve ter no mínimo 14 caracteres'
  }

  if (!dados.email.includes('@') || !dados.email.includes('.')) {
    erros.email = 'E-mail inválido.';
  }

  if (!dados.tema.trim()) {
    erros.tema = 'Informe a tema.';
  }

  return erros;
}

export default function App() {
  const [form, setForm] = useState<FormData>({
    nome: '',
    matricula: '',
    email: '',
    tema: '',
  });

  const [erros, setErros] = useState<FormErrors>({});

  function atualizarCampo(campo: keyof FormData, valor: string) {
    setForm((estadoAnterior) => ({
      ...estadoAnterior,
      [campo]: valor,
    }));
  }

  function enviar() {
    const errosEncontrados = validar(form);
    setErros(errosEncontrados);

    if (Object.keys(errosEncontrados).length > 0) {
      return;
    }

    Alert.alert('Cadastro realizado', `Aluno: ${form.nome}`);

    setForm({ nome: '',matricula: '', email: '', tema: '' });
    setErros({});
  }

  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Cadastro de Participação em Oficina</Text>

        <View style={styles.section}>
            <View style={styles.label}>
                <Text>Nome</Text>
                <TextInput
                    placeholderTextColor="rgba(0,0,0,0.4)"
                    style={[styles.input, erros.nome && styles.inputErro]}
                    placeholder="Digite seu nome..."
                    value={form.nome}
                    onChangeText={(texto) => atualizarCampo('nome', texto)}
                />
                {erros.nome ? <Text style={styles.textoErro}>{erros.nome}</Text> : null}
            </View>
            <View style={styles.label}>
                <Text>Matrícula</Text>
                <TextInput
                    placeholderTextColor="rgba(0,0,0,0.4)"
                    style={[styles.input, erros.matricula && styles.inputErro]}
                    placeholder="Digite sua matricula..."
                    value={form.matricula}
                    onChangeText={(texto) => atualizarCampo('matricula', texto)}
                />
                {erros.matricula ? <Text style={styles.textoErro}>{erros.matricula}</Text> : null}
            </View>
        </View>
        
        <View style={styles.section}>
            <View style={styles.label}>
                <Text>E-mail</Text>
                <TextInput
                    placeholderTextColor="rgba(0,0,0,0.4)"
                    style={[styles.input, erros.email && styles.inputErro]}
                    placeholder="seu@email.com"
                    value={form.email}
                    onChangeText={(texto) => atualizarCampo('email', texto)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                {erros.email ? <Text style={styles.textoErro}>{erros.email}</Text> : null}
            </View>

            <View style={styles.label}>
                <Text>Tema</Text>
                <TextInput
                    placeholderTextColor="rgba(0,0,0,0.4)"
                    style={[styles.input, erros.tema && styles.inputErro]}
                    placeholder="Ex: React Native"
                    value={form.tema}
                    onChangeText={(texto) => atualizarCampo('tema', texto)}
                />
                {erros.tema ? <Text style={styles.textoErro}>{erros.tema}</Text> : null}
            </View>
        </View>

        <Pressable style={styles.botao} onPress={enviar}>
            <Text style={styles.botaoTexto}>Enviar inscrição</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#16A34A',
        padding: 10,
        gap: 10,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#16A34A',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    label: {
        width: '50%',
        paddingRight: 10
    },
    input: {
        borderWidth: 1,
        borderColor: '#cbd5e1',
        borderRadius: 8,
        backgroundColor: '#ffffff',
        paddingHorizontal: 12,
        paddingVertical: 10,

    },
    inputErro: {
        borderColor: '#dc2626',
    },
    textoErro: {
        color: '#dc2626',
        fontSize: 12,
        marginBottom: 2,
    },
    botao: {
        marginTop: 10,
        backgroundColor: '#16A34A',
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: 'center',
    },
    botaoTexto: {
        color: '#ffffff',
        fontWeight: '700',
    },
});