import { TouchableOpacity, TouchableOpacityProps} from "react-native"
import { styles } from "./styles"

interface Botao extends TouchableOpacityProps {
    onPressP: () => void
    cor: boolean
}

export function ScreenSlider({onPressP, cor}:Botao){
    return(
        <>
            <TouchableOpacity style={cor ? styles.colorido : styles.vazio} onPress = {onPressP}/>
        </>
    )
}