import { Dimensions, StyleSheet, View, Image } from "react-native";
import Botao from "../components/Botao";
import Card from "../components/Card";
import Busca from "../components/Busca";
import Carousel from "react-native-reanimated-carousel";

const Home = () => {
  const width = Dimensions.get('window').width

  const cardsData = [
    {
      id: 1,
      imagem: require('../../assets/images/devices.png'),
      corImagem: '#704141',
      textoTitulo: 'SECOMP 2023',
      textoData: '10/10/2023'
    },

    {
      id: 2,
      imagem: require('../../assets/images/group.png'),
      corImagem: '#383838',
      textoTitulo: 'UBUNTU 2022',
      textoData: '05/06/2022'
    },

    {
      id: 3,
      imagem: require('../../assets/images/woman.png'),
      corImagem: '#D71616',
      textoTitulo: 'MENINAS CPU',
      textoData: '01/04/2022'
    },

    {
      id: 4,
      imagem: require('../../assets/images/party.png'),
      corImagem: '#C60EB3',
      textoTitulo: 'CARNAVAL 2024',
      textoData: '10/02/2024'
    },
  ]

  return (
    <View style={[styles.fundo]}>
      
      <View style={[styles.viewRowTitle]}>
        <Image style={{ height: 40, width: 40, tintColor:'white' }} source={require('../../assets/images/menu.png')} />
      </View>
      

      <View style={[styles.viewInput]}>
        <Busca style={[styles.inputText]} placeholderTexto ="Insira o termo de busca..." corFundo="white" corTexto="#8B8B8B"></Busca>
      </View>

      <View style={[styles.viewCards]}>
      <Carousel style={[styles.carousel, { alignItems: 'center' }]} 
        width={width} height={width / 2} data={cardsData} 
        renderItem={({ item }) => (
          <Card 
          textoTitulo={item.textoTitulo} 
          textoData={item.textoData} 
          imagem={item.imagem} 
          corImagem={item.corImagem}
          />
        )}
      />
      </View>


      <View style={[styles.viewButtons]}>
        <Botao texto ="NOVA PESQUISA" corFundo="#49B976" tamanhoFonte={30} fonteTexto="AveriaLibre-Regular" margemAbaixo={30}></Botao>
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
    flex: 0.05,
    backgroundColor: '#2B1D62'
  },

  viewInput: {
    flex: 0.15,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 16
  },
  
  viewCards: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.45
  },
  
  viewButtons: {
    flex: 0.35,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }

})

export default Home