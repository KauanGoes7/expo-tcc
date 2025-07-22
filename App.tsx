// App.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importe suas tipagens de navegação
import { RootStackParamList } from './types/navigation'; 

// Importe suas telas (garantindo que estão como .tsx)
import HomeScreen from './screens/HomeScreen.tsx';
import ServicosScreen from './screens/ServicosScreen.tsx';
// Adicione aqui as importações para as outras telas que você tem em 'screens/'
import ApresentacaoScreen from './screens/ApresentacaoScreen.tsx';
import AgendarDataScreen from './screens/AgendarDataScreen.tsx';
import BarbeirosScreen from './screens/BarbeirosScreen.tsx';
import ConfirmacaoAgendamentoScreen from './screens/ConfirmacaoAgendamentoScreen.tsx';

// Impede que a tela de splashscreen seja ocultada automaticamente
SplashScreen.preventAutoHideAsync();

// Cria o Stack Navigator e o tipa com RootStackParamList
const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Carregar as fontes aqui (certifique-se de ter os arquivos .ttf/otf na pasta assets/fonts)
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
      // Quando o aplicativo estiver pronto e as fontes carregadas, oculta a splashscreen
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    // Se o aplicativo ainda não estiver pronto (fontes não carregadas), retorna null
    // A splashscreen estará visível devido ao SplashScreen.preventAutoHideAsync()
    return null; 
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home" // A tela inicial será a HomeScreen
          screenOptions={{
            headerShown: false, // Oculta o header padrão do Stack Navigator em todas as telas
          }}
        >
          {/* Definição das telas no Stack Navigator. Os nomes devem corresponder a RootStackParamList */}
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Servicos" component={ServicosScreen} />
          <Stack.Screen name="Apresentacao" component={ApresentacaoScreen} />
          <Stack.Screen name="AgendarData" component={AgendarDataScreen} />
          <Stack.Screen name="Barbeiros" component={BarbeirosScreen} />
          <Stack.Screen name="ConfirmacaoAgendamento" component={ConfirmacaoAgendamentoScreen} />
          {/* Adicione outras telas aqui futuramente */}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  // Estilos globais para o App.tsx, se necessário. Geralmente, este arquivo é mínimo.
});