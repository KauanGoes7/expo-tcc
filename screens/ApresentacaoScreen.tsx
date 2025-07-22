// Exemplo: screens/ApresentacaoScreen.tsx
// (Use este modelo para ApresentacaoScreen.tsx, AgendarDataScreen.tsx, BarbeirosScreen.tsx, ConfirmacaoAgendamentoScreen.tsx, Header.tsx, BackButton.tsx)

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// Você pode importar seu tema aqui, se for usar estilos
// import { Colors, Fonts, Spacing } from '../styles/theme'; 

const NomeDaTela = () => { // <--- ALTERE ESTE NOME (Ex: ApresentacaoScreen, AgendarDataScreen, etc.)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá da NomeDaTela!</Text> {/* <--- ALTERE ESTE TEXTO */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C1C1C', // Cor de fundo de exemplo
  },
  text: {
    color: 'white', // Cor do texto de exemplo
    fontSize: 24,
  },
});

export default NomeDaTela; // <--- ALTERE ESTE NOME (Ex: ApresentacaoScreen, AgendarDataScreen, etc.)