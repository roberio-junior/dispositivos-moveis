import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

type FormData = {
  responsavel: string;
  email: string;
  codigoPedido: string;
  bairroEntrega: string;
  quantidadeVolumes: string;
  observacao: string;

};

type FormErrors = {
  responsavel?: string;
  email?: string;
  codigoPedido?: string;
  bairroEntrega?: string;
  quantidadeVolumes?: string;
  observacao?: string;

};

function validar(dados: FormData): FormErrors {
  const erros: FormErrors = {};

  if (!dados.responsavel.trim()) {
    erros.responsavel = 'Responsável é obrigatório.';
  }
  
  else if (dados.responsavel.trim().length < 3) {
    erros.responsavel = 'Responsável deve ter ao menos 3 caracteres.';
  }

  if (!dados.email.includes('@') || !dados.email.includes('.')) {
    erros.email = 'E-mail inválido.';
  }

  if (!dados.bairroEntrega.trim()) {
    erros.bairroEntrega = 'Informe o bairro para entrega.';
  }

  if (!dados.codigoPedido.trim()) {
    erros.codigoPedido = 'Informe o codigo do pedido';
  }

  else if (dados.codigoPedido.trim().length < 5) {
    erros.codigoPedido = 'O código deve ter ao menos 5 caracteres.';
  }

  if (!dados.quantidadeVolumes.trim()) {
    erros.quantidadeVolumes = 'Informe quantidade de volumes';
  }

  return erros;
}

export function Form() {
  const [form, setForm] = useState<FormData>({
    responsavel: '',
    email: '',
    codigoPedido: '',
    bairroEntrega: '',
    quantidadeVolumes: '',
    observacao: '',
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

    Alert.alert('Cadastro realizado', `Aluno: ${form.responsavel}`);

    setForm({ responsavel: '', email: '', codigoPedido: '', bairroEntrega: '', quantidadeVolumes: '', observacao: ''  });
    setErros({});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Formulário</Text>

      <TextInput
        style={[styles.input, erros.responsavel && styles.inputErro]}
        placeholder="Responsável..."
        value={form.responsavel}
        onChangeText={(texto) => atualizarCampo('responsavel', texto)}
      />
      {erros.responsavel ? <Text style={styles.textoErro}>{erros.responsavel}</Text> : null}

      <TextInput
        style={[styles.input, erros.email && styles.inputErro]}
        placeholder="E-mail..."
        value={form.email}
        onChangeText={(texto) => atualizarCampo('email', texto)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {erros.email ? <Text style={styles.textoErro}>{erros.email}</Text> : null}

      <TextInput
        style={[styles.input, erros.codigoPedido && styles.inputErro]}
        placeholder="Código do pedido..."
        value={form.codigoPedido}
        onChangeText={(texto) => atualizarCampo('codigoPedido', texto)}
      />
      {erros.codigoPedido ? <Text style={styles.textoErro}>{erros.codigoPedido}</Text> : null}

      <TextInput
        style={[styles.input, erros.bairroEntrega && styles.inputErro]}
        placeholder="Bairro de entrega"
        value={form.bairroEntrega}
        onChangeText={(texto) => atualizarCampo('bairroEntrega', texto)}
      />
      {erros.bairroEntrega ? <Text style={styles.textoErro}>{erros.bairroEntrega}</Text> : null}

      <TextInput
        style={[styles.input, erros.quantidadeVolumes && styles.inputErro]}
        placeholder="Quantidade de Volumes..."
        value={form.quantidadeVolumes}
        onChangeText={(texto) => atualizarCampo('quantidadeVolumes', texto)}
      />
      {erros.quantidadeVolumes ? <Text style={styles.textoErro}>{erros.quantidadeVolumes}</Text> : null}

      <TextInput
        style={[styles.input, erros.observacao && styles.inputErro]}
        placeholder="Observação..."
        value={form.observacao}
        onChangeText={(texto) => atualizarCampo('observacao', texto)}
      />

      <Pressable style={styles.botao} onPress={enviar}>
        <Text style={styles.botaoTexto}>Registrar Vistoria</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 16,
    justifyContent: 'center',
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