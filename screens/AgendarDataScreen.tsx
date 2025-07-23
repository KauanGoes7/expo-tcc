// screens/AgendarDataScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Colors, Fonts, Spacing } from '../styles/theme'; // Ajuste o caminho se necessário

interface AgendarDataScreenProps {
  // Tipagem atualizada, removendo 'Servicos'
  onNavigate: (screenName: 'Home' | 'Apresentacao' | 'AgendarData' | 'Barbeiros' | 'ConfirmacaoAgendamento' | 'CorteServicos' | 'BarbaServicos' | 'CabeloServicos') => void;
}

const AgendarDataScreen: React.FC<AgendarDataScreenProps> = ({ onNavigate }) => {
  return (
    <View style={styles.container}>
      {/* Top Content (similar às outras telas de serviço) */}
      <View style={styles.topContentPadding}>
        {/* Botão de Voltar para a tela anterior de serviços (BarbaServicos, CorteServicos ou CabeloServicos) */}
        {/* Você pode querer uma lógica para saber de onde veio, mas por simplicidade, voltará para BarbaServicos */}
        <TouchableOpacity onPress={() => onNavigate('BarbaServicos')} style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>AGENDAR DATA E HORA</Text>
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileIcon}>👤</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.sectionTitle}>Selecione a Data:</Text>
        {/* Aqui você adicionaria um seletor de data, por exemplo, de uma biblioteca como 'react-native-modern-datepicker' ou 'react-native-calendars' */}
        <View style={styles.placeholderBox}>
          <Text style={styles.placeholderText}>Espaço para Calendário / Seletor de Data</Text>
        </View>

        <Text style={styles.sectionTitle}>Selecione o Horário:</Text>
        {/* Aqui você adicionaria seletores de horário */}
        <View style={styles.placeholderBox}>
          <Text style={styles.placeholderText}>Espaço para Horários Disponíveis</Text>
        </View>

        {/* Exemplo de botão para confirmar */}
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => onNavigate('ConfirmacaoAgendamento')}
        >
          <Text style={styles.confirmButtonText}>Confirmar Agendamento</Text>
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
  topContentPadding: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.medium,
    paddingTop: Spacing.xl * 1.5,
    paddingBottom: Spacing.small,
  },
  backButton: {
    padding: Spacing.small,
  },
  backButtonText: {
    color: Colors.textLight,
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerTitle: {
    color: Colors.textLight,
    fontFamily: Fonts.heading,
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileButton: {
    padding: Spacing.small,
  },
  profileIcon: {
    color: Colors.textLight,
    fontSize: 24,
  },
  scrollViewContent: {
    paddingHorizontal: Spacing.medium,
    paddingBottom: Spacing.xl * 2,
  },
  sectionTitle: {
    fontFamily: Fonts.montserrat,
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textLight,
    marginTop: Spacing.large,
    marginBottom: Spacing.medium,
  },
  placeholderBox: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 10,
    padding: Spacing.large,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 150,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    marginBottom: Spacing.large,
  },
  placeholderText: {
    color: Colors.textMuted,
    fontFamily: Fonts.body,
    fontSize: 14,
    textAlign: 'center',
  },
  confirmButton: {
    backgroundColor: Colors.accentCyan,
    paddingVertical: Spacing.medium,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: Spacing.xl,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  confirmButtonText: {
    fontFamily: Fonts.body,
    fontSize: 18,
    fontWeight: '600',
    color: Colors.buttonPrimaryText,
  },
});

export default AgendarDataScreen;