import { StyleSheet, View, Text, Image } from "react-native";
import Botao from "../components/Botao";
import Input from "../components/Input";

const Login = (props) => {

  const handleLogin = () => {
    props.navigation.navigate("Drawer");
  };
  return (
    <View style={[styles.fundo]}>
      
      <View style={[styles.viewRowTitle]}>
        <Text style={[styles.textTitle]}>Satisfying.you</Text>
        <Image style={{ height: 50, width: 50 }} source={require('../../assets/images/smile.png')} />
      </View>

      

      <View style={[styles.viewInput]}>
        <Input style={[styles.inputText]} texto ="E-mail" corFundo="white" corTexto="#3F92C5" fonteTexto="AveriaLibre-Regular" corTextoTopo="white" tamanhoTextoTopo={20}></Input>
      
        <Input style={[styles.inputText]} texto ="Senha" corFundo="white" corTexto="#3F92C5" fonteTexto="AveriaLibre-Regular" corTextoTopo="white" tamanhoTextoTopo={20} ehSenha={true}></Input>
      </View>


      <View style={[styles.viewButtons]}>
        <Botao texto ="Entrar" corFundo="#49B976" tamanhoFonte={28} fonteTexto="AveriaLibre-Regular" margemAbaixo={40} onPress={handleLogin}></Botao>

        <Botao texto ="Criar minha conta" corFundo="#419ED7" tamanhoFonte={22} fonteTexto="AveriaLibre-Regular" margemAbaixo={4}></Botao>

        <Botao texto ="Esqueci minha senha" corFundo="#B0CCDE" tamanhoFonte={22} fonteTexto="AveriaLibre-Regular" margemAbaixo={4}></Botao>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  fundo: {
    backgroundColor: '#372775',
    flex: 1
  },

  viewRowTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    flex: 0.1,
    justifyContent: 'center'
  },

  viewInput: {
    flex: 0.3,
    flexDirection: 'column',
    justifyContent: 'center'
  },

  viewButtons: {
    flex: 0.6,
    flexDirection: 'column',
    justifyContent: 'top',
    alignItems: 'center'
  },

  textTitle: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 40,
    color: 'white'
  }
})

export default Login