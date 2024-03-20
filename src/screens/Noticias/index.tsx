import { ImageBackground, Text, View, Image, SafeAreaView } from "react-native"
import { styles } from "./styles"
import { ScreenSlider } from "../../components/screenslider"
import { Page } from '../../../App'

export function Noticias({ setPagina }: Page) {
  const login = require('../../assets/imageBack.png')
  const iconElenco = require('../../assets/iconElenco.png')
  const iconLogin = require('../../assets/iconLogin.png')
  const iconNoticia = require('../../assets/iconNoticia.png')

  return (
    <ImageBackground style={styles.container} source={login}>
      <View style={styles.elex}>
        <Text style={styles.pnx}>• PRINCIPAIS NOTÍCIAS</Text>
        <View style={styles.square}>
          <Text style={styles.titnot}>TÍTULO DA NOTÍCIA</Text>
          <Text style={styles.nots}>NOTÍCIA</Text>
        </View>
      </View>
      <View style={styles.tecx}>
        <View style={styles.square}>
          <Text style={styles.titnot}>TÍTULO DA NOTÍCIA</Text>
          <Text style={styles.nots}>NOTÍCIA</Text>
        </View>
      </View>
      <View style={styles.icons}>
        <Image style={styles.imgel} source={iconElenco}></Image>
        <Image style={styles.imgi} source={iconLogin}></Image>
        <Image style={styles.imgi} source={iconNoticia}></Image>
      </View>
      <View style={styles.pontos}>
        <ScreenSlider onPressP={() => setPagina(1)} cor={false} />
        <ScreenSlider onPressP={() => setPagina(2)} cor={false} />
        <ScreenSlider onPressP={() => setPagina(3)} cor={true} />
      </View>
    </ImageBackground>

  )
}