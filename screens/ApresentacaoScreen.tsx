import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors, Fonts, Spacing } from '../styles/theme'; // Ajuste o caminho se necessário

interface ApresentacaoScreenProps {
  // Removido 'Servicos' e ajustado a tipagem para o App.tsx atualizado
  onNavigate: (screenName: 'Home' | 'Apresentacao' | 'AgendarData' | 'Barbeiros' | 'ConfirmacaoAgendamento' | 'CorteServicos' | 'BarbaServicos' | 'CabeloServicos') => void;
}

const ApresentacaoScreen: React.FC<ApresentacaoScreenProps> = ({ onNavigate }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/AgendaCorte.png')} // Caminho da imagem do logo
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.slogan}>Estilo não se improvisa. Agende agora.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onNavigate('BarbaServicos')} // Navega diretamente para BarbaServicos
      >
        <Text style={styles.buttonText}>Agendar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backgroundDark, // Use a cor de fundo do seu tema
    padding: Spacing.large,
  },
  logo: {
    width: '80%', // Ajuste o tamanho conforme necessário
    height: 150, // Ajuste o tamanho conforme necessário
    marginBottom: Spacing.xl * 2,
  },
  slogan: {
    fontFamily: 'Arial', // Changed to Arial
    fontSize: 20,
    color: Colors.textLight, // Cor do texto clara
    textAlign: 'center',
    marginBottom: Spacing.xl * 2,
  },
  button: {
    backgroundColor: Colors.accentCyan, // Cor de destaque para o botão
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
    fontFamily: 'Arial', // Changed to Arial
    fontSize: 18,
    fontWeight: '600',
    color: Colors.buttonPrimaryText, // Cor do texto do botão
  },
});

export default ApresentacaoScreen;