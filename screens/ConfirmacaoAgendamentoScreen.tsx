import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Colors, Fonts, Spacing } from '../styles/theme'; // Ajuste o caminho para 'theme'

interface ConfirmacaoAgendamentoScreenProps {
  onNavigate: (screenName: 'Home' | 'Apresentacao' | 'AgendarData' | 'Barbeiros' | 'ConfirmacaoAgendamento' | 'CorteServicos' | 'BarbaServicos' | 'CabeloServicos') => void;
}

const ConfirmacaoAgendamentoScreen: React.FC<ConfirmacaoAgendamentoScreenProps> = ({ onNavigate }) => {
  // Dados de agendamento de exemplo.
  // Em uma aplicação real, estes dados seriam passados via navegação
  // ou obtidos de um gerenciador de estado (Redux, Context API, etc.).
  const agendamento = {
    data: 'domingo, 20 de julho de 2025',
    horario: '11:00',
    barbeiro: 'Lucas',
    servicos: 'Low Fade + Topo Texturizado',
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.headerTitle}>AGENDAMENTO CONCLUÍDO</Text>
        <Text style={styles.successText}>COM SUCESSO!</Text>

        <View style={styles.alertContainer}>
          <Text style={styles.alertText}>⚠️ Você receberá um lembrete pelo WhatsApp um dia antes do seu atendimento.</Text>
        </View>

        <View style={styles.detailsCard}>
          <View style={styles.detailRow}>
            <Text style={styles.detailIcon}>📅</Text>
            <View>
              <Text style={styles.detailLabel}>Data</Text>
              <Text style={styles.detailValue}>{agendamento.data}</Text>
            </View>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailIcon}>⏰</Text>
            <View>
              <Text style={styles.detailLabel}>Horário</Text>
              <Text style={styles.detailValue}>{agendamento.horario}</Text>
            </View>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailIcon}>🧔</Text>
            <View>
              <Text style={styles.detailLabel}>Barbeiro</Text>
              <Text style={styles.detailValue}>{agendamento.barbeiro}</Text>
            </View>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailIcon}>✂️</Text>
            <View>
              <Text style={styles.detailLabel}>Serviços</Text>
              <Text style={styles.detailValue}>{agendamento.servicos}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.thankYouText}>Muito obrigado pela confiança! Estamos ansiosos para te atender. ℹ️</Text>

        <TouchableOpacity
          style={styles.newAppointmentButton}
          onPress={() => onNavigate('Apresentacao')} // Volta para a tela inicial para novo agendamento
        >
          <Text style={styles.newAppointmentButtonText}>Novo Agendamento</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundDark,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.medium,
    paddingVertical: Spacing.xl * 2,
  },
  headerTitle: {
    fontFamily: 'Arial', // Changed to Arial
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.textLight,
    textAlign: 'center',
    
  },
  successText: {
    fontFamily: 'Arial', // Changed to Arial
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.accentCyan,
    textAlign: 'center',
    marginBottom: Spacing.large,
  },
  alertContainer: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 10,
    padding: Spacing.medium,
    marginBottom: Spacing.xl,
    width: '100%',
    maxWidth: 400, // Limita a largura para telas maiores
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.borderColor,
  },
  alertText: {
    fontFamily: 'Arial', // Changed to Arial
    fontSize: 14,
    color: Colors.textMuted,
    textAlign: 'center',
    lineHeight: 20,
  },
  detailsCard: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 10,
    padding: Spacing.large,
    marginBottom: Spacing.xl,
    width: '100%',
    maxWidth: 400, // Limita a largura para telas maiores
    borderWidth: 1,
    borderColor: Colors.borderColor,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.medium,
  },
  detailIcon: {
    fontSize: 28, // Tamanho dos emojis
    marginRight: Spacing.medium,
    fontFamily: 'Arial', // Changed to Arial (for consistency, though emojis might use system font)
  },
  detailLabel: {
    fontFamily: 'Arial', // Changed to Arial
    fontSize: 14,
    color: Colors.textMuted,
  },
  detailValue: {
    fontFamily: 'Arial', // Changed to Arial
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textLight,
  },
  thankYouText: {
    fontFamily: 'Arial', // Changed to Arial
    fontSize: 14,
    color: Colors.textMuted,
    textAlign: 'center',
    marginBottom: Spacing.xl,
    lineHeight: 20,
    paddingHorizontal: Spacing.medium,
  },
  newAppointmentButton: {
    backgroundColor: Colors.accentCyan,
    paddingVertical: Spacing.medium,
    borderRadius: 50,
    alignItems: 'center',
    width: '80%',
    maxWidth: 300,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  newAppointmentButtonText: {
    fontFamily: 'Arial', // Changed to Arial
    fontSize: 18,
    fontWeight: '600',
    color: Colors.buttonPrimaryText,
  },
});

export default ConfirmacaoAgendamentoScreen;