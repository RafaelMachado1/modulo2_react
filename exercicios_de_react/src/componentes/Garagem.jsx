import Carro from "./Carro";

function Garagem(props) {
  return (
    <div>
      <h1>Garagem da Labenu</h1>
      <button onClick={props.mensagemApresentacao}>Mensagem</button>
      <Carro
       cor={"Vermelho"}
       ano={2022}
       flex={"true"}
       adicionadoPor={props.nome}
        />
      <Carro
      cor={"Verde"}
      ano={2020}
      flex={"false"}
      adicionadoPor={props.nome}
       />
      <Carro
        cor={"Amarelo"}
        ano={2009}
        flex={"false"}
        adicionadoPor={props.nome}
      />
      <Carro
        cor={"Rosa"}
        ano={2022}
        flex={"true"}
        adicionadoPor={props.nome}
      />
      <Carro
        cor={"Azul"}
        ano={2021}
        flex={"true"}
        adicionadoPor={props.nome}
      />
      <Carro
        cor={"Preto"}
        ano={2018}
        flex={"true"}
        adicionadoPor={props.nome}
      />
      <Carro
        cor={"Prata"}
        ano={2016}
        flex={"false"}
        adicionadoPor={props.nome}
      />
      <Carro
        cor={"Branco"}
        ano={2019}
        flex={"true"}
        adicionadoPor={props.nome}
      />
    </div>
  );
}

export default Garagem;