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
      {/* Cabeçalho Superior - Adaptativo para celular */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log("Menu button pressed")} style={styles.menuButton}>
          {/* Você pode usar um ícone de biblioteca ou um simples Text */}
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onNavigate('Apresentacao')}
          style={styles.apresentacaoLink}
        >
          <Text style={styles.apresentacaoText}>APRESENTAÇÃO</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent}>
        {/* Logo Principal "Agenda Corte" */}
        <Image
          source={require('../assets/images/AgendaCorte.png')} // Caminho para sua logo principal
          style={styles.mainLogo}
          resizeMode="contain"
        />

        {/* Frase / Tagline - Separadas em duas linhas */}
        <Text style={styles.tagline}>Estilo não se improvisa.</Text>
        <Text style={styles.taglineSecondary}>Agende agora.</Text>

        {/* Botão Agendar */}
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
    // Removido alignItems e justifyContent do container para permitir o header na parte superior
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Alinha itens para os cantos
    alignItems: 'center',
    paddingHorizontal: Spacing.medium,
    paddingTop: Spacing.xl * 1.5, // Espaçamento superior para não colar na status bar
    paddingBottom: Spacing.small,
    width: '100%', // Garante que o cabeçalho ocupe toda a largura
  },
  menuButton: {
    padding: Spacing.small,
  },
  menuIcon: {
    color: Colors.textLight,
    fontSize: 24,
    fontFamily: 'Arial', // Consistente com outros textos
    fontWeight: 'bold',
  },
  apresentacaoLink: {
    padding: Spacing.small,
  },
  apresentacaoText: {
    fontFamily: 'Arial', // Consistente com outros textos
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.textLight,
  },
  mainContent: {
    flex: 1, // Permite que o conteúdo principal ocupe o espaço restante
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.medium,
    // Não precisa de paddingBottom tão grande aqui se o footer é fixo
  },
  mainLogo: {
    width: 300,
    height: 250,
    marginBottom: Spacing.large,
  },
  tagline: {
    fontFamily: 'Arial',
    fontSize: 20,
    fontWeight: '700',
    color: Colors.textLight,
    textAlign: 'center',
    marginBottom: Spacing.small, // Espaço entre as duas linhas da tagline
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  taglineSecondary: {
    fontFamily: 'Arial',
    fontSize: 20,
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
    fontFamily: 'Arial',
    fontSize: 18,
    fontWeight: '600',
    color: Colors.buttonPrimaryText,
  },
});

export default HomeScreen;