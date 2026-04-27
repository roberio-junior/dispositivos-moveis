import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#e2e8f0',
  },
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f8fafc',
    gap: 12,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    gap: 12,
    shadowColor: '#0f172a',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  appTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
  },
  appSubtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: '#475569',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
  },
  fieldGroup: {
    gap: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 12,
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 15,
    color: '#0f172a',
  },
  inputError: {
    borderColor: '#dc2626',
  },
  multilineInput: {
    minHeight: 96,
    textAlignVertical: 'top',
  },
  errorText: {
    color: '#dc2626',
    fontSize: 12,
  },
  selectorOptions: {
    flexDirection: 'row',
    gap: 12,
  },
  selectorButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    backgroundColor: '#ffffff',
  },
  selectorButtonActive: {
    borderColor: '#0f766e',
    backgroundColor: '#ccfbf1',
  },
  selectorButtonText: {
    color: '#334155',
    fontWeight: '600',
  },
  selectorButtonTextActive: {
    color: '#115e59',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  summaryLabel: {
    flex: 1,
    color: '#475569',
    fontSize: 13,
  },
  summaryValue: {
    flex: 1,
    color: '#0f172a',
    fontWeight: '600',
    textAlign: 'right',
  },
  statusBadge: {
    alignSelf: 'flex-start',
    borderRadius: 999,
    backgroundColor: '#e0f2fe',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  statusText: {
    color: '#075985',
    fontSize: 12,
    fontWeight: '700',
  },
  divider: {
    height: 1,
    backgroundColor: '#e2e8f0',
    marginVertical: 4,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 12,
  },
  buttonPrimary: {
    backgroundColor: '#0f766e',
  },
  buttonSecondary: {
    backgroundColor: '#e2e8f0',
  },
  buttonTextPrimary: {
    color: '#ffffff',
    fontWeight: '700',
  },
  buttonTextSecondary: {
    color: '#0f172a',
    fontWeight: '700',
  },
  footer: {
    alignItems: 'center',
    gap: 4,
    paddingVertical: 8,
  },
  footerText: {
    color: '#475569',
    fontSize: 12,
  },
});