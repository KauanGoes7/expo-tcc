// screens/ServicosScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../styles/theme'; // Importa de theme.ts

const ServicosScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Serviços (em construção)</Text>
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
  },
});

export default ServicosScreen;