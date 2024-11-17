import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const Botao = (props) => {

    const texto = props.texto
    const corFundo = props.corFundo
    const tamanhoFonte = props.tamanhoFonte
    const fonteTexto = props.fonteTexto
    const margemAbaixo = props.margemAbaixo

    return (
        <View style={styles.view}>
            <TouchableOpacity style={[{backgroundColor: corFundo, marginBottom: margemAbaixo}]}>
                <Text style={[{fontSize: tamanhoFonte, color:"white", textAlign:"center", fontFamily: fonteTexto}]}>{texto}</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    view: {
      marginVertical: 5,
      marginHorizontal: 10,
      width: 325
    }
  })

export default Botao