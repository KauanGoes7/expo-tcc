// Exemplo: screens/ServicosScreen.tsx
// (Aplique o mesmo padrão para ApresentacaoScreen.tsx, AgendarDataScreen.tsx, BarbeirosScreen.tsx, ConfirmacaoAgendamentoScreen.tsx)
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'; // Importe Button
import { Colors } from '../styles/theme'; 

// Defina o tipo da prop onNavigate
interface ScreenProps {
  onNavigate: (screenName: string) => void;
}

const ServicosScreen: React.FC<ScreenProps> = ({ onNavigate }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Serviços (em construção)</Text>
      {/* Exemplo de botão para voltar para Home */}
      <Button title="Voltar para Home" onPress={() => onNavigate('Home')} />
      {/* Exemplo de botão para ir para AgendarData */}
      <Button title="Ir para Agendar Data" onPress={() => onNavigate('AgendarData')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backgroundDark,
  },
  text: {
    color: Colors.textLight,
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    marginBottom: 20, // Adiciona margem abaixo do texto
  },
});

export default ServicosScreen;