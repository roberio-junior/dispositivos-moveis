import { useState } from 'react';
import { Alert, Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './styles';

type FormData = {
  nome: string;
  cpf: string;
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

  if (dados.cpf.length !== 11) {
    erros.cpf = 'CPF deve conter 11 dígitos.';
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

    if (Object.keys(errosEncontrados).length > 0) return;

    Alert.alert('Cadastro concluído', `Participante: ${form.nome}`);
    setForm({ nome: '', cpf: '', telefone: '', cep: '' });
    setErros({});
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
        style={[styles.input, erros.cpf && styles.inputErro]}
        placeholder="CPF"
        keyboardType="numeric"
        maxLength={14}
        value={formatarCPF(form.cpf)}
        onChangeText={(texto) => atualizarCampo('cpf', apenasDigitos(texto))}
      />
      {erros.cpf ? <Text style={styles.textoErro}>{erros.cpf}</Text> : null}

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

      <Pressable style={styles.botao} onPress={enviar}>
        <Text style={styles.botaoTexto}>Enviar cadastro</Text>
      </Pressable>
    </View>
  );
}