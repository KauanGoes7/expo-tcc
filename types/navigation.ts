// types/navigation.ts
import { NavigatorScreenParams } from '@react-navigation/native';

// Defina as rotas e os parâmetros que cada rota pode receber
export type RootStackParamList = {
  Home: undefined; // Home não recebe nenhum parâmetro
  Servicos: undefined; // Serviços não recebe nenhum parâmetro por enquanto
  // Adicione outras telas aqui com seus respectivos parâmetros (ou 'undefined' se não tiverem)
  Apresentacao: undefined;
  AgendarData: undefined;
  Barbeiros: undefined;
  ConfirmacaoAgendamento: undefined; // Mantenha como undefined por enquanto, ajustaremos depois
};

// Sobrescreve o tipo padrão de navegação para incluir nossas rotas
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}