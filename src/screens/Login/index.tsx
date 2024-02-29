import { ImageBackground, Text, View } from "react-native"
import { styles } from "./styles"

export function Login(){
  const login = require('../../assets/imageBack.png')
  return (
    <ImageBackground style={styles.container} source={login}>
      <View style={styles.titulo}>
        <Text style={styles.titulo}>ALLVASCO</Text>
      </View>
    </ImageBackground>

  )
}