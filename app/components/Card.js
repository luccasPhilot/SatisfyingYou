import { TextInput, Image, StyleSheet, TouchableOpacity, Text } from "react-native";

const Card = (props) => {

    const imagem = props.imagem
    const corImagem = props.corImagem
    const textoTitulo = props.textoTitulo
    const textoData = props.textoData
    const tamanho = props.tamanho

    return (
      <TouchableOpacity style={[styles.view, {width: tamanho }]}>
          <Image style={{ height: 100, width: 100, tintColor: corImagem}} source={props.imagem} /> 
          <Text style={styles.titleText}>{textoTitulo}</Text>
          <Text style={styles.dateText}>{textoData}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    view: {
      flexDirection: "column",
      backgroundColor: 'white',
      marginLeft: 10,
      marginRight: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
    },

    titleText: {
      color: '#3F92C5',
      justifyContent: 'center',
      fontSize: 26
    },

    dateText: {
      color: '#8B8B8B',
      fontSize: 14
    }
  })


export default Card