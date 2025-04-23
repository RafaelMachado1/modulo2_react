import Garagem from "./componentes/Garagem";
import "./../src/App.css";

export default function App() {

  const nome1 = "Rafael"

  function apresentaGaragem1(){
    alert(`Boas vindas à garagem de ${nome1}`)
  }

  const nome2 = "Gabriel"

  function apresentaGaragem2(){
    alert(`Boas vindas à garagem de ${nome2}`)
  }

  return (
    <div>
      <Garagem nome={nome1} mensagemApresentacao={apresentaGaragem1} />
      <Garagem nome={nome2} mensagemApresentacao={apresentaGaragem2} />
    </div>
  );
}