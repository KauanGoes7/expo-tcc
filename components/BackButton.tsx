// components/BackButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface BackButtonProps {
  onPress: () => void; // onNavigate virá daqui
}

const BackButton: React.FC<BackButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{'<'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#555555',
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});

export default BackButton;