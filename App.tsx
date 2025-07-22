// App.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Importe suas telas (agora elas receberão uma prop para navegação)
import HomeScreen from './screens/HomeScreen';
import ServicosScreen from './screens/ServicosScreen';
import ApresentacaoScreen from './screens/ApresentacaoScreen';
import AgendarDataScreen from './screens/AgendarDataScreen';
import BarbeirosScreen from './screens/BarbeirosScreen';
import ConfirmacaoAgendamentoScreen from './screens/ConfirmacaoAgendamentoScreen';

SplashScreen.preventAutoHideAsync();

// Defina os nomes das telas para o estado de navegação
type ScreenNames = 'Home' | 'Servicos' | 'Apresentacao' | 'AgendarData' | 'Barbeiros' | 'ConfirmacaoAgendamento';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<ScreenNames>('Home'); // Estado para controlar a tela atual

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'PlayfairDisplay-Bold': require('./assets/fonts/PlayfairDisplay-Bold.ttf'),
          'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
          'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null; 
  }

  // Função para mudar a tela
  const navigateTo = (screen: ScreenNames) => {
    setCurrentScreen(screen);
  };

  // Renderiza a tela baseada no estado currentScreen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return <HomeScreen onNavigate={navigateTo} />;
      case 'Servicos':
        return <ServicosScreen onNavigate={navigateTo} />;
      
      default:
        return <HomeScreen onNavigate={navigateTo} />; // Fallback
    }
  };

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      {renderScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Garante que o container ocupe toda a tela para as telas internas
  },
});