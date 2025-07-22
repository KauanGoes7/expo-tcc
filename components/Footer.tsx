// components/Footer.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../styles/theme'; // Importa de theme.ts (sem a extensão .ts)

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.nIcon}>N</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 999,
    alignItems: 'flex-start',
  },
  nIcon: {
    fontFamily: Fonts.montserrat,
    fontSize: 20,
    fontWeight: '700',
    color: Colors.textLight,
  },
});

export default Footer;