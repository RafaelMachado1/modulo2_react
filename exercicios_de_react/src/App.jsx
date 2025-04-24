import { Garagem } from "./Componentes/Garagem/Garagem";
import { GlobalStyled } from "./GlobalStyle";

export default function App() {
  const nome = "Labenu";

  function apresentaGaragem() {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  return (
    <div className="App">
      <GlobalStyled />
      <Garagem nome={nome} mensagemAprentacao={apresentaGaragem} />
    </div>
  );
}