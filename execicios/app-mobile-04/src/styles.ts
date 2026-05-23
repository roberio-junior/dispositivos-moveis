import { StyleSheet } from "react-native";

const colors = {
    fundo: '#f1f5f9',
    cabecalho: '#0f172a',
    card: '#ffffff',
    titulo: '#ffffff',
    subtitulo: '#cbd5e1',
    cardtext: '#475569',
    borda: '#e2e8f0',
    destaque: '#0f766e',
};

const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.fundo,
        padding: spacing.lg,
        gap: spacing.md,
    },
    cabecalho: {
        backgroundColor: colors.cabecalho,
        borderRadius: 12,
        padding: spacing.lg,
        gap: spacing.xl,
    },
    titulo: {
        fontSize: 20,
        fontWeight: '700',
        color: colors.titulo,
    },
    subtitulo: {
        fontSize: 13,
        color: colors.subtitulo,
    },
    linhaIndicadores: {
        flexDirection: 'row',
        gap: spacing.md,
    },
    cardIndicador: {
        flex: 1,
        backgroundColor: colors.card,
        borderRadius: 12,
        padding: spacing.lg,
        alignItems: 'center',
        gap: spacing.xl,
    },
    cardTitulo: {
        fontSize: 13,
        color: colors.cardtext,
    },
    cardValor: {
        fontSize: 22,
        fontWeight: '700',
        color: colors.destaque,
    },
    listaAvisos: {
        backgroundColor: colors.card,
        borderRadius: spacing.md,
        padding: spacing.md,
        gap: spacing.sm,
    },
    secaoTitulo: {
        fontSize: spacing.lg,
        fontWeight: '700',
        color: colors.destaque,
        marginBottom: spacing.xl,
    },
    avisoItem: {
        borderWidth: 1,
        borderColor: colors.borda,
        borderRadius: 8,
        padding: spacing.md,
    },
    avisoTexto: {
        color: colors.cardtext,
        fontSize: 14,
    },
})
