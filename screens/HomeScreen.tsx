// screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors, Fonts, Spacing } from '../styles/theme';
import Footer from '../components/Footer';

// Defina o tipo da prop onNavigate (necessário para a navegação condicional básica)
interface HomeScreenProps {
  onNavigate: (screenName: string) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        {/* Logo Principal "Agenda Corte" */}
        <Image
          source={require('../assets/images/AgendaCorte.png')} // Caminho para sua logo principal
          style={styles.mainLogo}
          resizeMode="contain"
        />

        {/* Frase / Tagline - AGORA ESTÁ IMEDIATAMENTE ABAIXO DA LOGO */}
        <Text style={styles.tagline}>Estilo não se improvisa. Agende agora.</Text>

        {/* Botão Agendar - AGORA ESTÁ IMEDIATAMENTE ABAIXO DA TAGLINE */}
        <TouchableOpacity
          style={styles.scheduleButton}
          onPress={() => onNavigate('Servicos')} // Usa a prop onNavigate
        >
          <Text style={styles.scheduleButtonText}>Agendar</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Fixo com "N" */}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.medium,
    paddingBottom: Spacing.xl * 2,
  },
  mainLogo: {
    width: 200,
    height: 200,
    marginBottom: Spacing.large, // Espaço entre a logo e a tagline
  },
  tagline: {
    fontFamily: Fonts.heading,
    fontSize: 20, // Mantido o tamanho diminuído
    fontWeight: '700',
    color: Colors.textLight,
    textAlign: 'center',
    marginBottom: Spacing.large, // Espaço entre a tagline e o botão
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  scheduleButton: {
    backgroundColor: Colors.accentCyan,
    paddingVertical: Spacing.small + 2,
    paddingHorizontal: Spacing.xl + 16,
    borderRadius: 50,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  scheduleButtonText: { 
    fontFamily: Fonts.body,
    fontSize: 18, // Mantido o tamanho diminuído
    fontWeight: '600',
    color: Colors.buttonPrimaryText,
  },
});

export default HomeScreen;