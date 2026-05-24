import { useState } from 'react';
import { Alert, Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './styles';

type FormData = {
  nome: string;
  email: string;
  turma: string;
};

type FormErrors = {
  nome?: string;
  email?: string;
  turma?: string;
};

function validar(dados: FormData): FormErrors {
  const erros: FormErrors = {};

  if (!dados.nome.trim()) {
    erros.nome = 'Nome é obrigatório.';
  } else if (dados.nome.trim().length < 3) {
    erros.nome = 'Nome deve ter ao menos 3 caracteres.';
  }

  if (!dados.email.includes('@') || !dados.email.includes('.')) {
    erros.email = 'E-mail inválido.';
  }

  if (!dados.turma.trim()) {
    erros.turma = 'Informe a turma.';
  }

  return erros;
}

export default function App() {
  const [form, setForm] = useState<FormData>({
    nome: '',
    email: '',
    turma: '',
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

    setForm({ nome: '', email: '', turma: '' });
    setErros({});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Inscrição na prática</Text>

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
        style={[styles.input, erros.turma && styles.inputErro]}
        placeholder="Turma"
        value={form.turma}
        onChangeText={(texto) => atualizarCampo('turma', texto)}
      />
      {erros.turma ? <Text style={styles.textoErro}>{erros.turma}</Text> : null}

      <Pressable style={styles.botao} onPress={enviar}>
        <Text style={styles.botaoTexto}>Enviar inscrição</Text>
      </Pressable>
    </View>
  );
}