import { TextInput, Image, StyleSheet, View, Text } from "react-native";
import { useState } from "react";

const Busca = (props) => {

    const corFundo = props.corFundo
    const corTexto = props.corTexto
    const fonteTexto = props.fonteTexto
    const placeholderTexto = props.placeholderTexto

    const [textoInserido, setTexto] = useState('')

    return (
        <View style={styles.view}>
          <Image style={{ height: 30, width: 30, tintColor: 'gray'}} source={require('../../assets/images/search.png')} /> 
          <TextInput style={[{color:corTexto, fontFamily: fonteTexto}]} value={textoInserido} placeholder={placeholderTexto} onFocus={() => setTexto("")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
      flexDirection: "row",
      marginVertical: 5,
      marginHorizontal: 10,
      marginBottom: 30,
      backgroundColor: 'white'
    }
  })


export default Busca