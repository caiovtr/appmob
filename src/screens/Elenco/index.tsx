import { ImageBackground, Text, View, Image, SafeAreaView} from "react-native"
import { styles } from "./styles"

export function Elenco(){
  const login = require('../../assets/imageBack.png')
  const iconElenco = require('../../assets/iconElenco.png')
  const iconLogin = require('../../assets/iconLogin.png')
  const iconNoticia = require('../../assets/iconNoticia.png')
  const estrelaCompleta = require('../../assets/starfill.png')
  const estrela = require('../../assets/starnot.png')

  return (
    <ImageBackground style={styles.container} source={login}>
        <View style={styles.elex}>
            <Text style={styles.elencoc}>• ELENCO</Text>
            <View style={styles.squareel}>
                <Text style={styles.insquare}>ELENCO</Text>
            </View>
        </View>
        <View style={styles.tecx}>
            <Text style={styles.elencoc}>• TÉCNICO</Text>
            <View style={styles.squaretec}>
                <Text style={styles.insquare}>TÉCNICO</Text>
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