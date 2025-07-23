// screens/ConfirmacaoAgendamentoScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Fonts, Spacing } from '../styles/theme'; // Ajuste o caminho se necessário

interface ConfirmacaoAgendamentoScreenProps {
  // Tipagem atualizada, removendo 'Servicos'
  onNavigate: (screenName: 'Home' | 'Apresentacao' | 'AgendarData' | 'Barbeiros' | 'ConfirmacaoAgendamento' | 'CorteServicos' | 'BarbaServicos' | 'CabeloServicos') => void;
}

const ConfirmacaoAgendamentoScreen: React.FC<ConfirmacaoAgendamentoScreenProps> = ({ onNavigate }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendamento Confirmado!</Text>
      <Text style={styles.message}>Seu serviço foi agendado com sucesso.</Text>
      <TouchableOpacity style={styles.button} onPress={() => onNavigate('Home')}>
        <Text style={styles.buttonText}>Voltar para o Início</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backgroundDark,
    padding: Spacing.large,
  },
  title: {
    fontFamily: Fonts.heading,
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.accentCyan,
    marginBottom: Spacing.medium,
  },
  message: {
    fontFamily: Fonts.body,
    fontSize: 16,
    color: Colors.textLight,
    textAlign: 'center',
    marginBottom: Spacing.xl,
  },
  button: {
    backgroundColor: Colors.accentCyan,
    paddingVertical: Spacing.medium,
    paddingHorizontal: Spacing.xl,
    borderRadius: 50,
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    fontFamily: Fonts.body,
    fontSize: 18,
    fontWeight: '600',
    color: Colors.buttonPrimaryText,
  },
});

export default ConfirmacaoAgendamentoScreen;