import { Elenco } from './src/screens/Elenco'
import { Noticias } from './src/screens/Noticias'
import { Login } from './src/screens/Login'
import { Dispatch, SetStateAction, useState } from 'react'

export interface Page {
  setPagina: Dispatch<SetStateAction<number>>
}


export default function App() {
  const [pagina, setPage] = useState(2)

  switch (pagina) {
    case 1:
      return <Elenco setPagina={setPage} />
      break
    case 2:
      return <Login setPagina={setPage} />
      break
    case 3:
      return <Noticias setPagina={setPage} />
      break
  }

}
