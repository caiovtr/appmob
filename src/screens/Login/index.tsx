import { ImageBackground, Text, View, Image, TextInput} from "react-native"
import { styles } from "./styles"

export function Login(){
  const login = require('../../assets/imageBack.png')
  const imglog = require('../../assets/imgLogin.png')
  const iconElenco = require('../../assets/iconElenco.png')
  const iconLogin = require('../../assets/iconLogin.png')
  const iconNoticia = require('../../assets/iconNoticia.png')
  const estrelaCompleta = require('../../assets/starfill.png')
  const estrela = require('../../assets/starnot.png')

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
          <Image style={styles.imgel} source={iconElenco}></Image>
          <Image style={styles.imgi} source={iconLogin}></Image>
          <Image style={styles.imgi} source={iconNoticia}></Image>
        </View>
        <View style={styles.icons2}>
          <Image style={styles.imgx} source={estrela}></Image>
          <Image style={styles.imgy} source={estrelaCompleta}></Image>
          <Image style={styles.imgx} source={estrela}></Image>
        </View>
      </View>
    </ImageBackground>

  )
}