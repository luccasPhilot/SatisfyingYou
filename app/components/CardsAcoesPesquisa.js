import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const CardsAcoesPesquisa = (props) => {

    const imagem = props.imagem
    const texto = props.texto

    return (
        <TouchableOpacity style={styles.button}>
            <Image style={styles.imageButton} source={imagem} />
            <Text style={styles.buttonText}>{texto}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2B1D62',
        padding: 20,
        borderRadius: 8,
        alignItems: 'center',
        width: 271,
        height: 238,
        justifyContent: 'center',
        marginRight: 30,
    },
    buttonText: {
        color: 'white',
        marginTop: 15,
        fontSize: 36,
        textAlign: 'center',
    },
    imageButton: {
        height: 100,
        width: 100,
    }
});


export default CardsAcoesPesquisa