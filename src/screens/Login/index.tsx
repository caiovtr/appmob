import { ImageBackground, Text, View, Image, TextInput } from "react-native"
import { styles } from "./styles"
import { ScreenSlider } from "../../components/screenslider"
import { Page } from '../../../App'

export function Login({ setPagina }: Page) {
  const login = require('../../assets/imageBack.png')
  const imglog = require('../../assets/imgLogin.png')
  const iconElenco = require('../../assets/iconElenco.png')
  const iconLogin = require('../../assets/iconLogin.png')
  const iconNoticia = require('../../assets/iconNoticia.png')

  return (
    <ImageBackground style={styles.container} source={login}>
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
      <View style={styles.icons}>
        <Image style={styles.imgel} source={iconElenco}></Image>
        <Image style={styles.imgi} source={iconLogin}></Image>
        <Image style={styles.imgi} source={iconNoticia}></Image>
      </View>
      <View style={styles.pontos}>
        <ScreenSlider onPressP={() => setPagina(1)} cor={false} />
        <ScreenSlider onPressP={() => setPagina(2)} cor={true} />
        <ScreenSlider onPressP={() => setPagina(3)} cor={false} />
      </View>
    </ImageBackground>

  )
}