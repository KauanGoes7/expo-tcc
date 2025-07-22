// screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native'; // Importe NavigationProp
import { RootStackParamList } from '../types/navigation'; // Importe suas tipagens
import { Colors, Fonts, Spacing } from '../styles/theme'; // Importa de theme.ts
import Footer from '../components/Footer'; // Importa de Footer.tsx

const HomeScreen = () => {
  // Use a tipagem para o hook useNavigation
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        {/* Logo Principal "Agenda Corte" */}
        <Image
          source={require('../assets/images/AgendaCorte.png')} // Caminho para sua logo principal
          style={styles.mainLogo}
          resizeMode="contain"
        />

        {/* Frase / Tagline */}
        <Text style={styles.tagline}>Estilo não se improvisa. Agende agora.</Text>

        {/* Botão Agendar */}
        <TouchableOpacity
          style={styles.scheduleButton}
          onPress={() => navigation.navigate('Servicos')} // O erro de tipagem será resolvido pelas tipagens
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