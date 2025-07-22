// screens/AgendarDataScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// Você pode importar seu tema aqui se for usar estilos, por exemplo:
// import { Colors, Fonts, Spacing } from '../styles/theme';

const AgendarDataScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Agendar Data (em construção)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E', // Exemplo de cor de fundo
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});

export default AgendarDataScreen;