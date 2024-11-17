import { StyleSheet, View, Text, Image } from "react-native";
import Botao from "../components/Botao";
import Input from "../components/Input";
import InputImage from "../components/InputImage";

const ModificarPesquisa = () => {
  return (
    <View style={[styles.fundo]}>
      
      <View style={[styles.viewRowTitle]}>
        <Image style={{ height: 50, width: 50, tintColor:'#573FBA' }} source={require('../../assets/images/arrow.png')} />
        <Text style={[styles.textTitle]}>Modificar Pesquisa</Text>
      </View>

      

      <View style={[styles.viewInput]}>
        <Input texto ="E-mail" corFundo="white" corTexto="#3F92C5" 
        fonteTexto="AveriaLibre-Regular" corTextoTopo="white" tamanhoTextoTopo={20}>
        </Input>
        
        <Input texto ="Data" corFundo="white" corTexto="#3F92C5" 
        fonteTexto="AveriaLibre-Regular" corTextoTopo="white" tamanhoTextoTopo={20} 
        icone={require('../../assets/images/calendar.png')}>
        </Input>

        <InputImage textoTopo ="Imagem" corFundo="white" corTexto="#3F92C5" 
        fonteTexto="AveriaLibre-Regular" corTextoTopo="white" tamanhoTextoTopo={20} icone={require('../../assets/images/party.png')}>
        </InputImage>
      </View>


      <View style={[styles.viewButtons]}>
        <Botao texto ="SALVAR" corFundo="#49B976" tamanhoFonte={36} fonteTexto="AveriaLibre-Regular"></Botao>
        <View style={[styles.remover]}>
          <Image style={{ height: 35, width: 35, tintColor:'white' }} source={require('../../assets/images/delete.png')} />
          <Text style={{ color: 'white' }}>Apagar</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  fundo: {
    backgroundColor: '#372775',
    flex: 1
  },

  remover: {
    flexDirection: 'column',
    alignItems: 'center'
  },

  viewRowTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    flex: 0.1,
    backgroundColor: '#2B1D62'
  },

  viewInput: {
    flex: 0.7,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },

  viewButtons: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  textTitle: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 30,
    color: 'white'
  }
})

export default ModificarPesquisa