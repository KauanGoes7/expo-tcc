import React, { useState } from 'react'; // Importe useState
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Colors, Fonts, Spacing } from '../styles/theme'; // Caminho corrigido para 'theme'

interface BarbeirosScreenProps {
  onNavigate: (screenName: 'Home' | 'Apresentacao' | 'AgendarData' | 'Barbeiros' | 'ConfirmacaoAgendamento' | 'CorteServicos' | 'BarbaServicos' | 'CabeloServicos') => void;
}

const BarbeirosScreen: React.FC<BarbeirosScreenProps> = ({ onNavigate }) => {
  const [selectedBarbeiroId, setSelectedBarbeiroId] = useState<string | null>(null); // Estado para controlar o barbeiro selecionado

  // Dados de exemplo para barbeiros com suas imagens
  const barbeiros = [
    { id: '1', nome: 'Rodrigo', especialidade: 'Cortes Clássicos, Barba', rating: 5, image: require('../assets/barbeiros/barbeiro 1.png') },
    { id: '2', nome: 'Lucas', especialidade: 'Degradês Modernos, Desenhos', rating: 4.8, image: require('../assets/barbeiros/barbeiro 1.png') }, // Usando a mesma imagem para exemplo
    { id: '3', nome: 'Marcelo', especialidade: 'Cabelo Feminino, Tratamentos', rating: 4.9, image: require('../assets/barbeiros/barbeiro 1.png') }, // Usando a mesma imagem para exemplo
  ];

  return (
    <View style={styles.container}>
      {/* Top Content */}
      <View style={styles.topContentPadding}>
        <TouchableOpacity onPress={() => onNavigate('BarbaServicos')} style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>ESCOLHA O SEU BARBEIRO</Text> {/* Título atualizado */}
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileIcon}></Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        
        <Text style={styles.descriptionText}>
          Na nossa agenda de cortes, você pode selecionar o barbeiro que melhor combina com o seu estilo! Cada profissional tem suas especialidades e horários disponíveis.
        </Text>

        {/* Links de Navegação (Serviços, Barbeiros, Contato) */}
        <View style={styles.navLinksContainer}>
          <TouchableOpacity onPress={() => onNavigate('BarbaServicos')}>
            <Text style={styles.navLink}>SERVIÇOS</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onNavigate('Barbeiros')}>
            <Text style={styles.navLinkActive}>BARBEIROS</Text>
          </TouchableOpacity>
        
        </View>

        {/* Lista de Barbeiros */}
        <View style={styles.barbeiroList}>
          {barbeiros.map((barbeiro) => (
            <TouchableOpacity
              key={barbeiro.id}
              style={[
                styles.barbeiroItem,
                selectedBarbeiroId === barbeiro.id && styles.barbeiroItemSelected // Aplica estilo de seleção
              ]}
              onPress={() => setSelectedBarbeiroId(barbeiro.id)} // Define o barbeiro selecionado
            >
              <View style={[
                styles.barbeiroImageContainer,
                selectedBarbeiroId === barbeiro.id && styles.barbeiroImageSelectedBorder // Borda verde para a imagem selecionada
              ]}>
                <Image source={barbeiro.image} style={styles.barbeiroImage} />
              </View>
              <View style={styles.barbeiroInfo}>
                <Text style={styles.barbeiroNome}>{barbeiro.nome}</Text>
                {/* <Text style={styles.barbeiroEspecialidade}>{barbeiro.especialidade}</Text> */}
              </View>
              {/* <Text style={styles.barbeiroRating}>⭐ {barbeiro.rating}</Text> */}
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={[styles.continueButton, !selectedBarbeiroId && styles.continueButtonDisabled]}
          onPress={() => selectedBarbeiroId && onNavigate('AgendarData')}
          disabled={!selectedBarbeiroId}
        >
          <Text style={styles.continueButtonText}>Continua</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundDark,
  },
  topContentPadding: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.medium,
    paddingTop: Spacing.xl * 1.5,
    paddingBottom: Spacing.small,
  },
  backButton: {
    padding: Spacing.small,
  },
  backButtonText: {
    color: Colors.textLight,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Arial', // Changed to Arial
  },
  headerTitle: {
    color: Colors.textLight,
    fontFamily: 'Arial', // Changed to Arial
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileButton: {
    padding: Spacing.small,
  },
  profileIcon: {
    color: Colors.textLight,
    fontSize: 24,
    fontFamily: 'Arial', // Changed to Arial
  },
  scrollViewContent: {
    paddingHorizontal: Spacing.medium,
    paddingBottom: Spacing.xl * 2,
  },
  descriptionTextBold: { // Novo estilo para o "BARBEIRO!"
    fontFamily: 'Arial', // Changed to Arial
    fontSize: 24,
    color: Colors.textLight,
    textAlign: 'center',
    marginBottom: Spacing.small,
  },
  descriptionText: {
    fontFamily: 'Arial', // Changed to Arial
    fontSize: 14,
    color: Colors.textMuted,
    textAlign: 'center',
    marginBottom: Spacing.large,
    lineHeight: 20,
    paddingHorizontal: Spacing.medium,
  },
  navLinksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: Spacing.large,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
    paddingBottom: Spacing.small,
  },
  navLink: {
    fontFamily: 'Arial', // Changed to Arial
    fontSize: 16,
    color: Colors.textMuted,
    fontWeight: 'bold',
    paddingVertical: Spacing.small,
  },
  navLinkActive: {
    fontFamily: 'Arial', // Changed to Arial
    fontSize: 16,
    color: Colors.accentCyan,
    fontWeight: 'bold',
    paddingVertical: Spacing.small,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accentCyan,
  },
  barbeiroList: {
    marginTop: Spacing.large,
  },
  barbeiroItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.cardBackground,
    borderRadius: 10,
    paddingVertical: Spacing.medium, // Ajuste o padding para a altura da linha
    paddingHorizontal: Spacing.medium,
    marginBottom: Spacing.medium,
    borderWidth: 1,
    borderColor: Colors.borderColor,
  },
  barbeiroItemSelected: { // Estilo para o item da lista selecionado (se precisar de uma borda no card)
    borderColor: Colors.selectedGreen,
  },
  barbeiroImageContainer: {
    width: 80, // Tamanho do círculo
    height: 80,
    borderRadius: 40, // Metade da largura/altura para ser um círculo perfeito
    backgroundColor: Colors.accentCyan, // Fundo azul claro para a imagem do barbeiro
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.medium,
    borderWidth: 2, // Borda inicial transparente
    borderColor: 'transparent',
  },
  barbeiroImageSelectedBorder: { // Borda verde quando a imagem do barbeiro é selecionada
    borderColor: Colors.selectedGreen,
  },
  barbeiroImage: {
    width: 70, // Tamanho da imagem dentro do círculo
    height: 70,
    borderRadius: 35, // Para que a imagem também seja circular
    resizeMode: 'contain', // Garante que a imagem se ajuste ao contêiner
  },
  barbeiroInfo: {
    flex: 1, // Permite que o nome ocupe o espaço restante
  },
  barbeiroNome: {
    fontFamily: 'Arial', // Changed to Arial
    fontSize: 22, // Aumente o tamanho da fonte para o nome
    fontWeight: 'bold',
    color: Colors.textLight,
  },
  // Estes estilos não são usados na nova disposição, mas mantidos caso precise:
  barbeiroEspecialidade: {
    fontFamily: 'Arial', // Changed to Arial
    fontSize: 14,
    color: Colors.textMuted,
  },
  barbeiroRating: {
    fontFamily: 'Arial', // Changed to Arial
    fontSize: 16,
    color: Colors.selectedGreen,
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: Colors.accentCyan,
    paddingVertical: Spacing.medium,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: Spacing.xl,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  continueButtonDisabled: {
    
  },
  continueButtonText: {
    fontFamily: 'Arial', // Changed to Arial
    fontSize: 18,
    fontWeight: '600',
    color: Colors.buttonPrimaryText,
  },
});

export default BarbeirosScreen;