import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./app/screens/Login"
import NovaConta from "./app/screens/NovaConta"
import RecuperarSenha from "./app/screens/RecuperarSenha"
import NovaPesquisa from "./app/screens/NovaPesquisa"
import ModificarPesquisa from "./app/screens/ModificarPesquisa";
import Drawer from "./app/screens/Drawer"
import AgradecimentoParticipacao from "./app/screens/AgradecimentoParticipacao";
import AcoesPesquisa from "./app/screens/AcoesPesquisa";
import Coleta from "./app/screens/Coleta";

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="Drawer" component={Drawer} />
        <Stack.Screen name="Nova Conta" component={NovaConta} />
        <Stack.Screen name="Recuperar Senha" component={RecuperarSenha} />
        <Stack.Screen name="Nova Pesquisa" component={NovaPesquisa} />
        <Stack.Screen name="Modificar Pesquisa" component={ModificarPesquisa} />
        <Stack.Screen name="Acoes Pesquisa" component={AcoesPesquisa} />
        <Stack.Screen name="Coleta" component={Coleta} />
        <Stack.Screen name="Agradecimentos" component={AgradecimentoParticipacao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
