import { useState } from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { CabecalhoApp } from './components/CabecalhoApp';
import { Footer } from './components/Footer';
import { ResumoVistoria } from './components/ResumoVistoria';
import { SeletorCondicao } from './components/SeletorCondicao';
import { styles } from './styles';
import type {
  CondicaoEntrega,
  FormData,
  FormErrors,
  ResumoRegistrado,
} from './types';

const initialForm: FormData = {
  responsavel: '',
  email: '',
  codigoPedido: '',
  bairroEntrega: '',
  quantidadeVolumes: '',
  observacao: '',
};

function validar(dados: FormData, condicao: CondicaoEntrega): FormErrors {
  const erros: FormErrors = {};

  if (!dados.responsavel.trim() || dados.responsavel.trim().length < 3) {
    erros.responsavel = 'Informe o responsavel com pelo menos 3 caracteres.';
  }

  if (!dados.email.includes('@') || !dados.email.includes('.')) {
    erros.email = 'Informe um e-mail valido.';
  }

  if (!dados.codigoPedido.trim() || dados.codigoPedido.trim().length < 5) {
    erros.codigoPedido =
      'Informe o codigo do pedido com pelo menos 5 caracteres.';
  }

  if (!dados.bairroEntrega.trim()) {
    erros.bairroEntrega = 'Informe o bairro de entrega.';
  }

  const volumes = Number(dados.quantidadeVolumes);
  if (!dados.quantidadeVolumes || Number.isNaN(volumes) || volumes <= 0) {
    erros.quantidadeVolumes =
      'Informe uma quantidade de volumes maior que zero.';
  }

  if (condicao === 'avaria') {
    if (!dados.observacao.trim() || dados.observacao.trim().length < 10) {
      erros.observacao =
        'Descreva a avaria com pelo menos 10 caracteres.';
    }
  }

  return erros;
}

function obterSituacaoGeral(
  dados: FormData,
  condicao: CondicaoEntrega,
  errosAtuais: FormErrors
) {
  const camposBasePreenchidos =
    dados.responsavel.trim() &&
    dados.codigoPedido.trim() &&
    dados.quantidadeVolumes.trim();

  if (!camposBasePreenchidos) {
    return 'Aguardando preenchimento';
  }

  if (condicao === 'avaria' && !dados.observacao.trim()) {
    return 'Revisar dados';
  }

  if (Object.keys(errosAtuais).length > 0) {
    return 'Revisar dados';
  }

  return 'Vistoria pronta para envio';
}

export default function App() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [erros, setErros] = useState<FormErrors>({});
  const [condicao, setCondicao] = useState<CondicaoEntrega>('integra');
  const [resumoRegistrado, setResumoRegistrado] =
    useState<ResumoRegistrado | null>(null);

  function limparErroDoCampo(campo: keyof FormData) {
    setErros((estadoAnterior) => {
      if (!estadoAnterior[campo]) {
        return estadoAnterior;
      }

      const novosErros = { ...estadoAnterior };
      delete novosErros[campo];
      return novosErros;
    });
  }

  function atualizarCampo(campo: keyof FormData, valor: string) {
    setForm((estadoAnterior) => ({
      ...estadoAnterior,
      [campo]: valor,
    }));

    limparErroDoCampo(campo);
  }

  function atualizarQuantidadeVolumes(valor: string) {
    const apenasDigitos = valor.replace(/\D/g, '');
    atualizarCampo('quantidadeVolumes', apenasDigitos);
  }

  function alternarCondicao() {
    setCondicao((estadoAnterior) => {
      const novaCondicao =
        estadoAnterior === 'integra' ? 'avaria' : 'integra';

      if (novaCondicao === 'integra') {
        setErros((estadoAnteriorErros) => {
          if (!estadoAnteriorErros.observacao) {
            return estadoAnteriorErros;
          }

          const novosErros = { ...estadoAnteriorErros };
          delete novosErros.observacao;
          return novosErros;
        });
      }

      return novaCondicao;
    });
  }

  function registrarVistoria() {
    const errosEncontrados = validar(form, condicao);
    setErros(errosEncontrados);

    if (Object.keys(errosEncontrados).length > 0) {
      return;
    }

    const resumo: ResumoRegistrado = {
      ...form,
      condicao,
    };

    setResumoRegistrado(resumo);

    Alert.alert(
      'Vistoria registrada',
      `Pedido ${form.codigoPedido} registrado com sucesso.`
    );
  }

  function limparFormulario() {
    setForm(initialForm);
    setErros({});
    setCondicao('integra');
    setResumoRegistrado(null);
  }

  const errosAtuais = validar(form, condicao);
  const situacaoGeral = obterSituacaoGeral(form, condicao, errosAtuais);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <CabecalhoApp
          titulo="Vistoria Rapida"
          subtitulo="Registre rapidamente a condicao de entrega do pedido em campo."
        />

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Formulario de vistoria</Text>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Responsavel</Text>
            <TextInput
              style={[styles.input, erros.responsavel && styles.inputError]}
              value={form.responsavel}
              placeholder="Nome do responsavel"
              onChangeText={(texto) => atualizarCampo('responsavel', texto)}
            />
            {erros.responsavel ? (
              <Text style={styles.errorText}>{erros.responsavel}</Text>
            ) : null}
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={[styles.input, erros.email && styles.inputError]}
              value={form.email}
              placeholder="responsavel@empresa.com"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(texto) => atualizarCampo('email', texto)}
            />
            {erros.email ? (
              <Text style={styles.errorText}>{erros.email}</Text>
            ) : null}
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Codigo do pedido</Text>
            <TextInput
              style={[styles.input, erros.codigoPedido && styles.inputError]}
              value={form.codigoPedido}
              placeholder="Ex.: PED12345"
              onChangeText={(texto) => atualizarCampo('codigoPedido', texto)}
            />
            {erros.codigoPedido ? (
              <Text style={styles.errorText}>{erros.codigoPedido}</Text>
            ) : null}
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Bairro de entrega</Text>
            <TextInput
              style={[styles.input, erros.bairroEntrega && styles.inputError]}
              value={form.bairroEntrega}
              placeholder="Informe o bairro"
              onChangeText={(texto) => atualizarCampo('bairroEntrega', texto)}
            />
            {erros.bairroEntrega ? (
              <Text style={styles.errorText}>{erros.bairroEntrega}</Text>
            ) : null}
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Quantidade de volumes</Text>
            <TextInput
              style={[
                styles.input,
                erros.quantidadeVolumes && styles.inputError,
              ]}
              value={form.quantidadeVolumes}
              placeholder="0"
              keyboardType="numeric"
              onChangeText={atualizarQuantidadeVolumes}
            />
            {erros.quantidadeVolumes ? (
              <Text style={styles.errorText}>{erros.quantidadeVolumes}</Text>
            ) : null}
          </View>
          <SeletorCondicao
            condicao={condicao}
            onToggle={alternarCondicao}
          />

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Observacao</Text>
            <TextInput
              style={[
                styles.input,
                styles.multilineInput,
                erros.observacao && styles.inputError,
              ]}
              value={form.observacao}
              placeholder="Descreva a avaria quando necessario"
              multiline
              numberOfLines={4}
              onChangeText={(texto) => atualizarCampo('observacao', texto)}
            />
            {erros.observacao ? (
              <Text style={styles.errorText}>{erros.observacao}</Text>
            ) : null}
          </View>

          <View style={styles.buttonRow}>
            <Pressable
              style={[styles.button, styles.buttonPrimary]}
              onPress={registrarVistoria}
            >
              <Text style={styles.buttonTextPrimary}>Registrar vistoria</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonSecondary]}
              onPress={limparFormulario}
            >
              <Text style={styles.buttonTextSecondary}>Limpar</Text>
            </Pressable>
          </View>
        </View>
        <ResumoVistoria
          responsavel={form.responsavel}
          codigoPedido={form.codigoPedido}
          quantidadeVolumes={form.quantidadeVolumes}
          condicao={condicao}
          situacaoGeral={situacaoGeral}
          resumoRegistrado={resumoRegistrado}
        />

        <Footer
          nomeAluno="Seu Nome Aqui"
          matricula="20250000000"
        />
      </ScrollView>
    </SafeAreaView>
  );
}