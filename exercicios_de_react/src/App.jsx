import { useState } from 'react'
import { Garagem } from './Componentes/Garagem/index.jsx'
import { GlobalStyled } from './GlobalStyled.jsx'

export default function App() {
  const [nome, setNome] = useState("Labenu")

  return (
    <div className="App">
      <GlobalStyled />

      <Garagem nome={nome}  alterarNome={setNome} />
    </div>
  )
}