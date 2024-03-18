import { ImageBackground, Text, View, Image, SafeAreaView} from "react-native"
import { styles } from "./styles"

export function Noticias(){
  const login = require('../../assets/imageBack.png')
  const iconElenco = require('../../assets/iconElenco.png')
  const iconLogin = require('../../assets/iconLogin.png')
  const iconNoticia = require('../../assets/iconNoticia.png')
  const estrelaCompleta = require('../../assets/starfill.png')
  const estrela = require('../../assets/starnot.png')

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
        <View style={styles.icons2}>
          <Image style={styles.imgx} source={estrelaCompleta}></Image>
          <Image style={styles.imgy} source={estrela}></Image>
          <Image style={styles.imgx} source={estrela}></Image>
        </View>
    </ImageBackground>

  )
}