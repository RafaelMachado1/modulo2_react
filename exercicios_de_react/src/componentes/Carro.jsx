function Carro(props) {
  return (
    <div>
      <h2>Volksvagem</h2>
      <ul>
        <li>Cor: {props.cor}</li>
        <li>Ano: {props.ano}</li>
        <li>Flex: {props.flex}</li>
        <li>Adicionado por: {props.adicionadoPor}</li>
      </ul>

    </div>
  );
}

export default Carro;