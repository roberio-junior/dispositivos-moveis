import { useState } from 'react';
import { Alert, TextInput, Pressable, StyleSheet, Text, View } from 'react-native';

type FormData = {
  nome: string;
  email: string;
  tema: string;
  vagas: string;
};

type FormErrors = {
  nome?: string;
  email?: string;
  tema?: string;
  vagas?: string;
};

function validar(dados: FormData): FormErrors {
  const erros: FormErrors = {};

  if (!dados.nome.trim()) {
    erros.nome = 'Informe o nome.';
  }
  
  else if (dados.nome.trim().length < 3) {
    erros.nome = 'Nome deve ter ao menos 3 caracteres.';
  }

  if (!dados.email.includes('@') || !dados.email.includes('.')) {
    erros.email = 'Informe um e-mail válido.';
  }

  if (!dados.tema.trim()) {
    erros.tema = 'Informe o tema.';
  }

  if (!dados.vagas.trim()) {
    erros.vagas = 'Informe a quantidade de vagas.';
  }

  else if (isNaN(Number(dados.vagas.trim()))) {
    erros.vagas = 'Digite um número válido.';
  }

  else if (Number(dados.vagas.trim()) <= 0) {
    erros.vagas = 'Informe um número de vagas maior que zero.';
  }

  return erros;
}

export default function App() {
  const [form, setForm] = useState<FormData>({
    nome: '',
    email: '',
    tema: '',
    vagas: '',
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

    setForm({ nome: '', email: '', tema: '', vagas:'' });
    setErros({});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Participação em Oficina</Text>

      <TextInput
        style={[styles.input, erros.nome && styles.inputErro]}
        placeholder="Nome"
        value={form.nome}
        onChangeText={(texto) => atualizarCampo('nome', texto)}
      />
      {erros.nome ? <Text style={styles.textoErro}>{erros.nome}</Text> : null}

      <TextInput
        style={[styles.input, erros.email && styles.inputErro]}
        placeholder="E-mail"
        value={form.email}
        onChangeText={(texto) => atualizarCampo('email', texto)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {erros.email ? <Text style={styles.textoErro}>{erros.email}</Text> : null}

      <TextInput
        style={[styles.input, erros.tema && styles.inputErro]}
        placeholder="Tema"
        value={form.tema}
        onChangeText={(texto) => atualizarCampo('tema', texto)}
      />
      {erros.tema ? <Text style={styles.textoErro}>{erros.tema}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Quantidade de vagas"
        value={form.vagas}
        onChangeText={(texto) => atualizarCampo('vagas', texto)}
        keyboardType="numeric"
      />
      {erros.vagas ? <Text style={styles.textoErro}>{erros.vagas}</Text> : null}

      <Pressable style={styles.botao} onPress={enviar}>
        <Text style={styles.botaoTexto}>Enviar inscrição</Text>
      </Pressable>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 16,
    gap: 8,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 8,
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
    backgroundColor: '#0f766e',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#ffffff',
    fontWeight: '700',
  },
});
