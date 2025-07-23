// screens/BarbeirosScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Colors, Fonts, Spacing } from '../styles/theme'; // Ajuste o caminho se necessário

interface BarbeirosScreenProps {
  // Tipagem correta para a prop onNavigate
  onNavigate: (screenName: 'Home' | 'Apresentacao' | 'AgendarData' | 'Barbeiros' | 'ConfirmacaoAgendamento' | 'CorteServicos' | 'BarbaServicos' | 'CabeloServicos') => void;
}

const BarbeirosScreen: React.FC<BarbeirosScreenProps> = ({ onNavigate }) => {
  // Dados de exemplo para barbeiros
  const barbeiros = [
    { id: '1', nome: 'Barbeiro A', especialidade: 'Cortes Clássicos, Barba', rating: 5 },
    { id: '2', nome: 'Barbeiro B', especialidade: 'Degradês Modernos, Desenhos', rating: 4.8 },
    { id: '3', nome: 'Barbeiro C', especialidade: 'Cabelo Feminino, Tratamentos', rating: 4.9 },
  ];

  return (
    <View style={styles.container}>
      {/* Top Content */}
      <View style={styles.topContentPadding}>
        <TouchableOpacity onPress={() => onNavigate('BarbaServicos')} style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>NOSSOS BARBEIROS</Text>
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileIcon}>👤</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.descriptionText}>
          Conheça nossos profissionais! Escolha o barbeiro de sua preferência para agendar seu serviço.
        </Text>

        {/* Links de Navegação (Serviços, Barbeiros) */}
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
              style={styles.barbeiroItem}
              onPress={() => {
                // Ao clicar no barbeiro, você pode navegar para a tela de agendamento de data/hora
                // e talvez passar o ID do barbeiro como parâmetro (se fosse usando react-navigation)
                // Com o state manual, você pode armazenar o barbeiro selecionado em App.tsx ou usar um contexto
                onNavigate('AgendarData');
              }}
            >
              <View style={styles.barbeiroInfo}>
                <Text style={styles.barbeiroNome}>{barbeiro.nome}</Text>
                <Text style={styles.barbeiroEspecialidade}>{barbeiro.especialidade}</Text>
              </View>
              <Text style={styles.barbeiroRating}>⭐ {barbeiro.rating}</Text>
            </TouchableOpacity>
          ))}
        </View>
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
  },
  headerTitle: {
    color: Colors.textLight,
    fontFamily: Fonts.heading,
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileButton: {
    padding: Spacing.small,
  },
  profileIcon: {
    color: Colors.textLight,
    fontSize: 24,
  },
  scrollViewContent: {
    paddingHorizontal: Spacing.medium,
    paddingBottom: Spacing.xl * 2,
  },
  descriptionText: {
    fontFamily: Fonts.body,
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
    fontFamily: Fonts.montserrat,
    fontSize: 16,
    color: Colors.textMuted,
    fontWeight: 'bold',
    paddingVertical: Spacing.small,
  },
  navLinkActive: {
    fontFamily: Fonts.montserrat,
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
    justifyContent: 'space-between',
    backgroundColor: Colors.cardBackground,
    borderRadius: 10,
    padding: Spacing.medium,
    marginBottom: Spacing.medium,
    borderWidth: 1,
    borderColor: Colors.borderColor,
  },
  barbeiroInfo: {
    flex: 1,
  },
  barbeiroNome: {
    fontFamily: Fonts.montserrat,
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textLight,
    marginBottom: Spacing.small / 2,
  },
  barbeiroEspecialidade: {
    fontFamily: Fonts.body,
    fontSize: 14,
    color: Colors.textMuted,
  },
  barbeiroRating: {
    fontFamily: Fonts.montserrat,
    fontSize: 16,
    color: Colors.selectedGreen,
    fontWeight: 'bold',
  },
});

export default BarbeirosScreen;