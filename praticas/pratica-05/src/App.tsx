import { useState } from 'react';
import { Alert, Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './styles';

type FormData = {
  nome: string;
  curso: string;
  cpf: string;
  data: string;
  telefone: string;
  cep: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function apenasDigitos(valor: string) {
  return valor.replace(/\D/g, '');
}

function formatarCPF(valor: string) {
  const digitos = apenasDigitos(valor).slice(0, 11);
  if (digitos.length <= 3) return digitos;
  if (digitos.length <= 6) return `${digitos.slice(0, 3)}.${digitos.slice(3)}`;
  if (digitos.length <= 9) {
    return `${digitos.slice(0, 3)}.${digitos.slice(3, 6)}.${digitos.slice(6)}`;
  }
  return `${digitos.slice(0, 3)}.${digitos.slice(3, 6)}.${digitos.slice(6, 9)}-${digitos.slice(9)}`;
}

function formatarData(valor: string) {
  const digitos = apenasDigitos(valor).slice(0, 8);
  if (digitos.length <= 2) return digitos;
  if (digitos.length <= 4) return `${digitos.slice(0,2)}/${digitos.slice(2)}`;
  return `${digitos.slice(0,2)}/${digitos.slice(2,4)}/${digitos.slice(4)}`;
}

function formatarTelefone(valor: string) {
  const digitos = apenasDigitos(valor).slice(0, 11);
  if (digitos.length <= 0) return ``;
  if (digitos.length <= 2) return `(${digitos}`;
  if (digitos.length <= 6) return `(${digitos.slice(0, 2)}) ${digitos.slice(2)}`;
  if (digitos.length <= 10) {
    return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 6)}-${digitos.slice(6)}`;
  }
  return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 7)}-${digitos.slice(7)}`;
}

function formatarCEP(valor: string) {
  const digitos = apenasDigitos(valor).slice(0, 8);
  if (digitos.length <= 5) return digitos;
  return `${digitos.slice(0, 5)}-${digitos.slice(5)}`;
}

function validar(dados: FormData): FormErrors {
  const erros: FormErrors = {};

  if (!dados.nome.trim() || dados.nome.trim().length < 3) {
    erros.nome = 'Nome deve ter ao menos 3 caracteres.';
  }

  if (!dados.curso.trim() || dados.curso.trim().length < 2) {
    erros.curso = 'O nome do curso deve ter ao menos 2 caracteres.';
  }

  if (dados.cpf.length !== 11) {
    erros.cpf = 'CPF deve conter 11 dígitos.';
  }

  if (dados.data.length !== 8) {
    erros.data = 'A data deve conter 8 dígitos.';
  }

  if (dados.telefone.length < 10 || dados.telefone.length > 11) {
    erros.telefone = 'Telefone deve ter 10 ou 11 dígitos.';
  }

  if (dados.cep.length !== 8) {
    erros.cep = 'CEP deve conter 8 dígitos.';
  }

  return erros;
}

export default function App() {
  const [form, setForm] = useState<FormData>({
    nome: '',
    cpf: '',
    telefone: '',
    cep: '',
    curso: '',
    data: '',
  });
  const [erros, setErros] = useState<FormErrors>({});

  function atualizarCampo(campo: keyof FormData, valor: string) {
    setForm((estadoAnterior) => ({
      ...estadoAnterior,
      [campo]: valor,
    }));
  }

  function limparFormulario() {
    setForm({
      nome: '',
      cpf: '',
      telefone: '',
      cep: '',
      curso: '',
      data: '',
    });

    setErros({});
  }

  function enviar() {
    const errosEncontrados = validar(form);
    setErros(errosEncontrados);

    if (Object.keys(errosEncontrados).length > 0) return;

    Alert.alert('Cadastro concluído', `Participante: ${form.nome}`);
    limparFormulario();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro com Máscaras</Text>

      <TextInput
        style={[styles.input, erros.nome && styles.inputErro]}
        placeholder="Nome completo"
        value={form.nome}
        onChangeText={(texto) => atualizarCampo('nome', texto)}
      />
      {erros.nome ? <Text style={styles.textoErro}>{erros.nome}</Text> : null}

      <TextInput
        style={[styles.input, erros.curso && styles.inputErro]}
        placeholder="Curso"
        value={form.curso}
        onChangeText={(texto) => atualizarCampo('curso', texto)}
      />
      {erros.curso ? <Text style={styles.textoErro}>{erros.curso}</Text> : null}

      <TextInput
        style={[styles.input, erros.cpf && styles.inputErro]}
        placeholder="CPF"
        keyboardType="numeric"
        maxLength={14}
        value={formatarCPF(form.cpf)}
        onChangeText={(texto) => atualizarCampo('cpf', apenasDigitos(texto))}
      />
      {erros.cpf ? <Text style={styles.textoErro}>{erros.cpf}</Text> : null}
      <Text style={styles.contador}>
        {form.cpf.length}/11 dígitos
      </Text>

      <TextInput
        style={[styles.input, erros.data && styles.inputErro]}
        placeholder="DD/MM/AAAA"
        keyboardType="numeric"
        maxLength={10}
        value={formatarData(form.data)}
        onChangeText={(texto) => atualizarCampo('data', apenasDigitos(texto))}
      />
      {erros.data ? <Text style={styles.textoErro}>{erros.data}</Text> : null}

      <TextInput
        style={[styles.input, erros.telefone && styles.inputErro]}
        placeholder="Telefone"
        keyboardType="phone-pad"
        maxLength={15}
        value={formatarTelefone(form.telefone)}
        onChangeText={(texto) => atualizarCampo('telefone', apenasDigitos(texto))}
      />
      {erros.telefone ? <Text style={styles.textoErro}>{erros.telefone}</Text> : null}

      <TextInput
        style={[styles.input, erros.cep && styles.inputErro]}
        placeholder="CEP"
        keyboardType="numeric"
        maxLength={9}
        value={formatarCEP(form.cep)}
        onChangeText={(texto) => atualizarCampo('cep', apenasDigitos(texto))}
      />
      {erros.cep ? <Text style={styles.textoErro}>{erros.cep}</Text> : null}
      <Text style={styles.contador}>
        {form.cep.length}/8 dígitos
      </Text>

      <Pressable style={styles.botao} onPress={enviar}>
        <Text style={styles.botaoTexto}>Enviar cadastro</Text>
      </Pressable>

      <Pressable style={styles.botaoLimpar} onPress={limparFormulario}>
        <Text style={styles.botaoTexto}>Limpar</Text>
      </Pressable>
    </View>
  );
}