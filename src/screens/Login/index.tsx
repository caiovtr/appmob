import { ImageBackground, Text, View, Image, TextInput } from "react-native"
import { styles } from "./styles"

export function Login() {
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
        <View style={styles.tituloimg}>
          <Text style={styles.allvasco}>ALLVASCO</Text>
          <Image source={imglog}></Image>
        </View>
        <View style={styles.log}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput style={styles.input}></TextInput>
          <Text style={styles.label}>Senha</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
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
    </ImageBackground>

  )
}