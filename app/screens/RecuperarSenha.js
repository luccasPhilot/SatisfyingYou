import { StyleSheet, View, Text, Image } from "react-native";
import Botao from "../components/Botao";
import Input from "../components/Input";

const RecuperarSenha = () => {
  return (
    <View style={[styles.fundo]}>
      
      <View style={[styles.viewRowTitle]}>
        <Image style={{ height: 50, width: 50, tintColor:'#573FBA' }} source={require('../../assets/images/arrow.png')} />
        <Text style={[styles.textTitle]}>Recuperação de Senha</Text>
      </View>

      

      <View style={[styles.viewInput]}>
        <Input style={[styles.inputText]} texto ="E-mail" corFundo="white" corTexto="#3F92C5" fonteTexto="AveriaLibre-Regular" corTextoTopo="white" tamanhoTextoTopo={20}></Input>
      </View>


      <View style={[styles.viewButtons]}>
        <Botao texto ="RECUPERAR" corFundo="#49B976" tamanhoFonte={36} fonteTexto="AveriaLibre-Regular" margemAbaixo={30}></Botao>
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
    backgroundColor: '#2B1D62'
  },

  viewInput: {
    flex: 0.65,
    flexDirection: 'column',
    justifyContent: 'center'
  },

  viewButtons: {
    flex: 0.25,
    flexDirection: 'column',
    justifyContent: 'flex-start', 
    alignItems: 'center'
  },

  textTitle: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 30,
    color: 'white'
  }
})

export default RecuperarSenha