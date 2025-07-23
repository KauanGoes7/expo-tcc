// screens/BarbaServicosScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Colors, Fonts, Spacing } from '../styles/theme'; // CORRIGIDO: de 'themes' para 'theme'

interface BarbaServicosScreenProps {
  onNavigate: (screenName: 'Home' | 'Apresentacao' | 'AgendarData' | 'Barbeiros' | 'ConfirmacaoAgendamento' | 'CorteServicos' | 'BarbaServicos' | 'CabeloServicos') => void;
}

const BarbaServicosScreen: React.FC<BarbaServicosScreenProps> = ({ onNavigate }) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    { id: 'barbaDegradeDesenhos', title: 'Barba Degradê + Desenhos', description: 'Degradê perfeito dos lados + detalhes artísticos (linhas geométricas ou símbolos personalizados).' },
    { id: 'stubbleTexturizado', title: 'Stubble Texturizado', description: '*Barba rala aparada com precisão (3mm-5mm) + contorno definido (estilo "homem moderno").*' },
    { id: 'vanDyke', title: 'Van Dyke', description: 'Bigode separado + cavanhaque alongado (toque vintage e sofisticado).' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topContentPadding}>
        <TouchableOpacity onPress={() => onNavigate('Home')} style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>BEM VINDO USER!</Text>
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileIcon}>👤</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.descriptionText}>
          No Agenda Corte, você agenda seus cortes de cabelo, barba e tratamentos de forma rápida, fácil e sem complicação. Escolha o horário perfeito, o profissional preferido e receba lembretes automáticos — tudo na palma da sua mão!
        </Text>

        <View style={styles.navLinksContainer}>
          <TouchableOpacity onPress={() => onNavigate('BarbaServicos')}>
            <Text style={styles.navLinkActive}>SERVIÇOS</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onNavigate('Barbeiros')}>
            <Text style={styles.navLink}>BARBEIROS</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { /* Implementar navegação para Contato se houver */ }}>
            <Text style={styles.navLink}>CONTATO</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.serviceCategoryButtons}>
          {/* Categoria de Cabelo (Cortes) */}
          <TouchableOpacity style={styles.categoryButton} onPress={() => onNavigate('CorteServicos')}>
            <Image source={require('../assets/servicos/scissors 1.png')} style={styles.categoryIcon} />
          </TouchableOpacity>
          {/* Categoria de Barba - Agora com fundo azul claro e borda verde */}
          <View style={[styles.categoryButton, styles.selectedCategoryBorder, { backgroundColor: Colors.accentCyan }]}>
            <Image source={require('../assets/servicos/beard 1.png')} style={[styles.categoryIcon, { tintColor: Colors.buttonPrimaryText }]} />
          </View>
          {/* Categoria de Cabelo + Barba (usando barbearia 1.png do assets/servicos) */}
          <TouchableOpacity style={styles.categoryButton} onPress={() => onNavigate('CabeloServicos')}>
            <Image source={require('../assets/servicos/barbearia 1.png')} style={styles.categoryIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.serviceList}>
          {services.map((service) => (
            <TouchableOpacity
              key={service.id}
              style={styles.serviceItem}
              onPress={() => setSelectedService(service.id)}
            >
              <View style={[
                styles.radioCircle,
                selectedService === service.id && styles.radioCircleSelected
              ]}></View>
              <View style={styles.serviceTextContent}>
                <Text style={styles.serviceTitle}>{service.title}</Text>
                <Text style={styles.serviceDescription}>{service.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={[styles.continueButton, !selectedService && styles.continueButtonDisabled]}
          onPress={() => selectedService && onNavigate('AgendarData')}
          disabled={!selectedService}
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
  descriptionText: {
    fontFamily: Fonts.body,
    fontSize: 14,
    color: Colors.textMuted,
    textAlign: 'center',
    marginBottom: Spacing.large,
    lineHeight: 20,
    paddingHorizontal: Spacing.medium,
  },
  navLinksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: Spacing.large,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
    paddingBottom: Spacing.small,
  },
  navLink: {
    fontFamily: Fonts.montserrat,
    fontSize: 16,
    color: Colors.textMuted,
    fontWeight: 'bold',
    paddingVertical: Spacing.small,
  },
  navLinkActive: {
    fontFamily: Fonts.montserrat,
    fontSize: 16,
    color: Colors.accentCyan,
    fontWeight: 'bold',
    paddingVertical: Spacing.small,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accentCyan,
  },
  serviceCategoryButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: Spacing.large,
  },
  categoryButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedCategoryBorder: {
    borderColor: Colors.selectedGreen, // Borda verde para a categoria selecionada
  },
  categoryIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    
  },
  serviceList: {
    marginTop: Spacing.large,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.cardBackground,
    borderRadius: 10,
    padding: Spacing.medium,
    marginBottom: Spacing.medium,
    borderWidth: 1,
    borderColor: Colors.borderColor,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.accentCyan,
    marginRight: Spacing.medium,
  },
  radioCircleSelected: {
    backgroundColor: Colors.selectedGreen,
    borderColor: Colors.selectedGreen,
  },
  serviceTextContent: {
    flex: 1,
  },
  serviceTitle: {
    fontFamily: Fonts.montserrat,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.textLight,
    
  },
  serviceDescription: {
    fontFamily: Fonts.body,
    fontSize: 12,
    color: Colors.textMuted,
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

export default BarbaServicosScreen;