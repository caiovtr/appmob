import { Login } from './src/screens/Login'
import { Elenco } from './src/screens/Elenco'
import { Noticias } from './src/screens/Noticias'

/*import { useFonts, nome fonte } from '@expo-google-fonts/slackey';

  export interface IPage {
    setPageI: Dispatch<SetStateAction<number>>
  }
*/

export default function App() {
  /*  
    const [page, setPage] = useState(1)
    const [fontsLoaded] = useFonts({
      nome da fonte
    });
    if (!fontsLoaded) {
      return null
    }
    switch (page) {
      case 1:
        return <ScreenSlider1 setPageI={setPage} />
        break;
      case 2:
        return <ScreenSlider1 setPageI={setPage} />
        break;
      case 3:
        return <ScreenSlider1 setPageI={setPage} />
        break;
      default:
        return <ScreenSlider1 setPageI={setPage} />
        break;
    }
  */
  return (
      <Noticias />
  );
}