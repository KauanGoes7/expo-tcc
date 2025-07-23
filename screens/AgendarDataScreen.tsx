// screens/AgendarDataScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Colors, Fonts, Spacing } from '../styles/theme';

interface AgendarDataScreenProps {
  onNavigate: (screenName: 'Home' | 'Apresentacao' | 'AgendarData' | 'Barbeiros' | 'ConfirmacaoAgendamento' | 'CorteServicos' | 'BarbaServicos' | 'CabeloServicos') => void;
}

const AgendarDataScreen: React.FC<AgendarDataScreenProps> = ({ onNavigate }) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Dados mockados para os 5 dias úteis da semana
  const dates = [
    { id: '1', day: 'seg.', date: '28 de jul.' },
    { id: '2', day: 'ter.', date: '29 de jul.' },
    { id: '3', day: 'qua.', date: '30 de jul.' },
    { id: '4', day: 'qui.', date: '31 de jul.' },
    { id: '5', day: 'sex.', date: '01 de ago.' },
    // Você pode adicionar mais datas se precisar de um range maior de 5 dias úteis
  ];

  const times = [
    '09:00', '10:00', '11:00', '12:00', '14:00',
    '15:00', '16:00', '17:00',
  ];

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      // Aqui você poderia passar os dados selecionados para a próxima tela
      // por exemplo, usando um contexto ou um gerenciador de estado global.
      onNavigate('ConfirmacaoAgendamento');
    } else {
      Alert.alert('Atenção', 'Por favor, selecione uma data e um horário para continuar.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Content */}
      <View style={styles.topContentPadding}>
        <TouchableOpacity onPress={() => onNavigate('Barbeiros')} style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>SELECIONE DATA E HORA</Text>
        <View style={{ width: 40 }} /> {/* Espaçador para alinhar o título */}
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.descriptionText}>
          Escolha a data e o horário que melhor se encaixa na sua rotina.
        </Text>

        {/* Escolha a Data */}
        <Text style={styles.sectionTitle}>Escolha a Data</Text>
        <View style={styles.dateSelectionContainer}>
          {dates.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.dateItem,
                selectedDate === item.id && styles.dateItemSelected
              ]}
              onPress={() => setSelectedDate(item.id)}
            >
              <Text style={[styles.dateItemDay, selectedDate === item.id && styles.dateItemTextSelected]}>
                {item.day}
              </Text>
              <Text style={[styles.dateItemDate, selectedDate === item.id && styles.dateItemTextSelected]}>
                {item.date}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Escolha o Horário */}
        <Text style={styles.sectionTitle}>Escolha o Horário</Text>
        <View style={styles.timeGrid}>
          {times.map((time) => (
            <TouchableOpacity
              key={time}
              style={[
                styles.timeItem,
                selectedTime === time && styles.timeItemSelected,
                !selectedDate && styles.timeItemDisabled // Desabilita horários se a data não for selecionada
              ]}
              onPress={() => {
                if (selectedDate) {
                  setSelectedTime(time);
                } else {
                  Alert.alert('Atenção', 'Por favor, selecione uma data primeiro para ver os horários.');
                }
              }}
              disabled={!selectedDate}
            >
              <Text style={[styles.timeItemText, selectedTime === time && styles.timeItemTextSelected]}>
                {time}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {!selectedDate && (
          <Text style={styles.timeSelectionMessage}>
            Por favor, selecione uma data primeiro para ver os horários.
          </Text>
        )}

        <TouchableOpacity
          style={[styles.continueButton, (!selectedDate || !selectedTime) && styles.continueButtonDisabled]}
          onPress={handleContinue}
          disabled={!selectedDate || !selectedTime}
        >
          <Text style={styles.continueButtonText}>Continua</Text>
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
  scrollViewContent: {
    paddingHorizontal: Spacing.medium,
    paddingBottom: Spacing.xl * 2,
  },
  descriptionText: {
    fontFamily: Fonts.body,
    fontSize: 14,
    color: Colors.textMuted,
    textAlign: 'center',
    marginBottom: Spacing.large,
    lineHeight: 20,
    paddingHorizontal: Spacing.medium,
  },
  sectionTitle: {
    fontFamily: Fonts.heading,
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textLight,
    textAlign: 'center',
    marginBottom: Spacing.large,
  },
  dateSelectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginBottom: Spacing.xl,
    paddingHorizontal: Spacing.small,
  },
  dateItem: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 10,
    paddingVertical: Spacing.medium,
    paddingHorizontal: Spacing.large,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.borderColor,
    minWidth: 90,
    
    flexGrow: 1,
    flexBasis: '18%', // Ajustado para tentar caber 5 em uma linha ou quebrar melhor
  },
  dateItemSelected: {
    backgroundColor: Colors.accentCyan,
    borderColor: Colors.selectedGreen,
  },
  dateItemDay: {
    fontFamily: Fonts.montserrat,
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.textMuted,
    
  },
  dateItemDate: {
    fontFamily: Fonts.body,
    fontSize: 16,
    color: Colors.textLight,
  },
  dateItemTextSelected: {
    color: Colors.buttonPrimaryText,
  },
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: Spacing.xl,
  },
  timeItem: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 10,
    paddingVertical: Spacing.small,
    paddingHorizontal: Spacing.medium,
    
    width: 90,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.borderColor,
  },
  timeItemSelected: {
    backgroundColor: Colors.accentCyan,
    borderColor: Colors.selectedGreen,
  },
  timeItemText: {
    fontFamily: Fonts.montserrat,
    fontSize: 16,
    color: Colors.textLight,
  },
  timeItemTextSelected: {
    color: Colors.buttonPrimaryText,
  },
  timeItemDisabled: {
    opacity: 0.5,
  },
  timeSelectionMessage: {
    fontFamily: Fonts.body,
    fontSize: 14,
    color: Colors.textMuted,
    textAlign: 'center',
    marginTop: -Spacing.medium,
    marginBottom: Spacing.large,
  },
  continueButton: {
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
  continueButtonDisabled: {
    
  },
  continueButtonText: {
    fontFamily: Fonts.body,
    fontSize: 18,
    fontWeight: '600',
    color: Colors.buttonPrimaryText,
  },
});

export default AgendarDataScreen;