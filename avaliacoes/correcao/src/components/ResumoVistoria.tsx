import { Text, View } from 'react-native';
import { styles } from '../styles';
import type { CondicaoEntrega, ResumoRegistrado } from '../types';

type ResumoVistoriaProps = {
  responsavel: string;
  codigoPedido: string;
  quantidadeVolumes: string;
  condicao: CondicaoEntrega;
  situacaoGeral: string;
  resumoRegistrado: ResumoRegistrado | null;
};

function formatarCondicao(condicao: CondicaoEntrega) {
  return condicao === 'integra' ? 'Entrega integra' : 'Entrega com avaria';
}

export function ResumoVistoria({
  responsavel,
  codigoPedido,
  quantidadeVolumes,
  condicao,
  situacaoGeral,
  resumoRegistrado,
}: ResumoVistoriaProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Resumo da vistoria</Text>

      <View style={styles.summaryRow}>
        <Text style={styles.summaryLabel}>Responsavel</Text>
        <Text style={styles.summaryValue}>
          {responsavel.trim() || 'Nao informado'}
        </Text>
      </View>

      <View style={styles.summaryRow}>
        <Text style={styles.summaryLabel}>Codigo do pedido</Text>
        <Text style={styles.summaryValue}>
          {codigoPedido.trim() || 'Nao informado'}
        </Text>
      </View>

      <View style={styles.summaryRow}>
        <Text style={styles.summaryLabel}>Quantidade de volumes</Text>
        <Text style={styles.summaryValue}>
          {quantidadeVolumes.trim() || 'Nao informada'}
        </Text>
      </View>

      <View style={styles.summaryRow}>
        <Text style={styles.summaryLabel}>Condicao selecionada</Text>
        <Text style={styles.summaryValue}>{formatarCondicao(condicao)}</Text>
      </View>

      <View style={styles.statusBadge}>
        <Text style={styles.statusText}>{situacaoGeral}</Text>
      </View>

      {resumoRegistrado ? (
        <>
          <View style={styles.divider} />
          <Text style={styles.sectionTitle}>Ultima vistoria registrada</Text>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Responsavel</Text>
            <Text style={styles.summaryValue}>
              {resumoRegistrado.responsavel}
            </Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Pedido</Text>
            <Text style={styles.summaryValue}>
              {resumoRegistrado.codigoPedido}
            </Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Volumes</Text>
            <Text style={styles.summaryValue}>
              {resumoRegistrado.quantidadeVolumes}
            </Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Condicao</Text>
            <Text style={styles.summaryValue}>
              {formatarCondicao(resumoRegistrado.condicao)}
            </Text>
          </View>
        </>
      ) : null}
    </View>
  );
}