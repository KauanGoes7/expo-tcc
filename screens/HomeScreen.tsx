// screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors, Fonts, Spacing } from '../styles/theme'; 
import Footer from '../components/Footer'; 

// Defina o tipo da prop onNavigate
interface HomeScreenProps {
  onNavigate: (screenName: string) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Image
          source={require('../assets/images/AgendaCorte.png')} 
          style={styles.mainLogo}
          resizeMode="contain"
        />
        <Text style={styles.tagline}>Estilo não se improvisa. Agende agora.</Text>

        <TouchableOpacity
          style={styles.scheduleButton}
          onPress={() => onNavigate('Servicos')} // Usa a prop onNavigate
        >
          <Text style={styles.scheduleButtonText}>Agendar</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: Spacing.large,
  },
  tagline: {
    fontFamily: Fonts.heading,
    fontSize: 24,
    fontWeight: '700',
    color: Colors.textLight,
    textAlign: 'center',
    marginBottom: Spacing.large,
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  scheduleButton: {
    backgroundColor: Colors.accentCyan,
    paddingVertical: Spacing.medium,
    paddingHorizontal: Spacing.xl * 2,
    borderRadius: 50,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  scheduleButtonText: {
    fontFamily: Fonts.body,
    fontSize: 20,
    fontWeight: '600',
    color: Colors.buttonPrimaryText,
  },
});

export default HomeScreen;