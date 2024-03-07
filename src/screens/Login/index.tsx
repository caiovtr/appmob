import { ImageBackground, Text, View, Image, TextInput} from "react-native"
import { styles } from "./styles"

export function Login(){
  const login = require('../../assets/imageBack.png')
  const imglog = require('../../assets/imgLogin.png')
  const iconElenco = require('../../assets/iconElenco.png')
  return (
    <ImageBackground style={styles.container} source={login}>
      <View style={styles.titulo}>
        <Text style={styles.titulo}>ALLVASCO</Text>
        <Image style={styles.imagLog} source={imglog}></Image>
        <View style={styles.log}>
          <Text style={styles.log}>E-mail</Text>
          <TextInput style={styles.input}></TextInput>
          <Text style={styles.log}>Senha</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View style={styles.icons}>
          <Image style={styles.elenco} source={iconElenco}></Image>
        </View>
      </View>
    </ImageBackground>

  )
}