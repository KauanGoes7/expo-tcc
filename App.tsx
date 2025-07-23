// App.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// IMPORTS DAS TELAS - REMOVA A EXTENSÃO ".tsx" AQUI PARA O BUNDLER RESOLVER MELHOR
// E verifique se os nomes dos arquivos estão corretos (ex: HomeScreen.tsx, não HomeScreen.jsx)
import HomeScreen from './screens/HomeScreen';
import ApresentacaoScreen from './screens/ApresentacaoScreen';
import AgendarDataScreen from './screens/AgendarDataScreen';
import BarbeirosScreen from './screens/BarbeirosScreen';
import ConfirmacaoAgendamentoScreen from './screens/ConfirmacaoAgendamentoScreen';
import CorteServicosScreen from './screens/CorteServicosScreen';
import BarbaServicosScreen from './screens/BarbaServicosScreen';
import CabeloServicosScreen from './screens/CabeloServicosScreen';

SplashScreen.preventAutoHideAsync();

// Defina os nomes das telas para o estado de navegação
// Garanta que todos os nomes de tela que você usa estão aqui
type ScreenNames = 'Home' | 'Apresentacao' | 'AgendarData' | 'Barbeiros' | 'ConfirmacaoAgendamento' | 'CorteServicos' | 'BarbaServicos' | 'CabeloServicos';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<ScreenNames>('Apresentacao'); // Começa na tela de Apresentação

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          // Verifique os caminhos e nomes das suas fontes. Ex:
          // 'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
          // 'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
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

  const navigateTo = (screen: ScreenNames) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return <HomeScreen onNavigate={navigateTo} />;
      case 'Apresentacao':
        return <ApresentacaoScreen onNavigate={navigateTo} />;
      case 'AgendarData':
        return <AgendarDataScreen onNavigate={navigateTo} />;
      case 'Barbeiros':
        return <BarbeirosScreen onNavigate={navigateTo} />;
      case 'ConfirmacaoAgendamento':
        return <ConfirmacaoAgendamentoScreen onNavigate={navigateTo} />;
      case 'CorteServicos':
        return <CorteServicosScreen onNavigate={navigateTo} />;
      case 'BarbaServicos':
        return <BarbaServicosScreen onNavigate={navigateTo} />;
      case 'CabeloServicos':
        return <CabeloServicosScreen onNavigate={navigateTo} />;
      default:
        return <Text>Tela não encontrada: {currentScreen}</Text>;
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
  },
});