import React from 'react'
import { Form } from '../MainPage/styles'
import { useState } from 'react';

const ConfirmationForm = ({setFormFlow}) => {
  //todos estados criados para receberem os valores que vêm dos diferentes tipos de inputs.
  const [data, setData] = useState("");
  const [fone, setFone] = useState("");
  const [genero, setGenero] = useState("");
  const [cor, setCor] = useState("");
  const [curso, setCurso] = useState("");
  const [escolaridade, setEscolaridade] = useState(false);
  const [disponibilidade, setDisponibilidade] = useState(false);

  // console.log(data,fone, genero,cor,curso, escolaridade, disponibilidade);

  // funçoes para serem chamadas no evento onChange de cada input
  function onChangeData(event) {
    setData(event.target.value);
  }
  function onChangeFone(event) {
    setFone(event.target.value);
  }
  function onChangeGenero(event) {
    setGenero(event.target.value);
  }
  function onChangeCor(event) {
    setCor(event.target.value);
  }
  function onChangeCurso(event) {
    setCurso(event.target.value);
  }
  function onChangeEscolaridade(event) {
    setEscolaridade(event.target.value);
  }
  function onChangeDisponibilidade(event) {
    setDisponibilidade(event.target.value);
  }
  //função que vetifica se todos os campos foram preenchidos,  envia os dados e apaga os inputs ou caso algum campo não esteja preenchido emite um alert.
  function enviarDados() {
    // lembrando que string vazia é considerada falsy pelo javascript
    if (data && fone && genero && cor && curso && escolaridade && disponibilidade  ) {
      const user = {
        data: data,
        telefone: fone,
        genero: genero,
        cor: cor,
        curso: curso,
        escolaridade: escolaridade,
        disponibilidade: disponibilidade
      };
      // Imprime um objeto.
      console.log(user);
      //Muda os estados para vazio ou false.
      setData("");
      setFone("");
      setGenero("");
      setCor("");
      setCurso("");
      setEscolaridade(false);
      setDisponibilidade(false);

      setFormFlow(1); //volta para a página inicial
    } else {
      alert("Preencha todos os campos");
    }
  }


  return (
    <Form>

      {/* os dois primeiros inputs receberão os valores que o usuário irá digitar, por isso colocamos o estado 'data' e 'fone' com valores do atributo value */}
      <input
        type="date"
        placeholder="Data"
        onChange={onChangeData}
        value={data}
        required
      />
      <input
        type="tel"
        placeholder="Telefone"
        onChange={onChangeFone}
        value={fone}
        required
      />
      {/* Já os inputs do tipo select recebem como valor do atributo 'value' o estado que receberá como valor  as opções de cada tag option */}
      <label>
        {" "}
        Gênero:
        <br />
        <select value={genero} onChange={onChangeGenero}>
          <option></option>
          <option>Homem cisgênero</option>
          <option>Mulher cisgênero</option>
          <option> Homem trans</option>
          <option>Mulher trans</option>
          <option>Pessoa não binária</option>
          <option>Prefiro não dizer</option>
        </select>
      </label>
      {/* Outra forma de trabalhar com o select é eniando valores diferentes das opções disponíveis usando em cada tag option um atributo value, neste caso o estado 'cor' irá receber oa valores do atributo value. */}
      <label>
        {" "}
        Cor:
        <br />
        <select value={cor} onChange={onChangeCor}>
          <option value=" "></option>
          <option value="negro">Negro</option>
          <option value="branco">Branco</option>
          <option value="pardo">Pardo</option>
          <option value="amarelo">Amarelo</option>
          <option value="indígena">indígena</option>
          <option value="PND">prefiro não dizer</option>
        </select>
      </label>
      {/* Os inputs do tipo 'radio' e 'checkbox' funcionam de maneiras muito similares: 
    Chamamos no onChange a função que muda o estado e passamos um valor fixo no 'value'.
    */}
      <section>
        <p>Curso Web Fullstack</p>
        {/* Se o intuito for escolher entre uma OU outra opção, como  um curso noturno ou Integral, mas nunca os dois, passamos o mesmo valor para o atributo 'name'. o atributo checkd existe aqui para iniciar uma das opções marcadas logo de inicio. neste caso a apção Noturno inicia marcado.  */}
        <input
          type="radio"
          id="curso1"
          name="curso"
          value={"Integral"}
          onChange={onChangeCurso}
        />
        <label for="curso1">Integral</label>

        <input
          type="radio"
          id="curso2"
          name="curso"
          value={"Noturno"}
          onChange={onChangeCurso}
          checked="checked"
        />
        <label for="curso2">Noturno</label>
      </section>
      <section>
        {/* Já no input checkbox, para que o botão inicie desativado o atributo checked deve receber como valor false. aqui passamos o estado que iniciará com este valor.
          Se o intuito for multipla escolha como abaixo, podemos passar  valores diferentes para o atributo 'name'   */}
        <input
          type="checkbox"
          id="html"
          name="escolaridade"
          value={"Médio Completo"}
          onChange={onChangeEscolaridade}
          checked={escolaridade}
        />
        <label for="html">Ensino Médio Completo</label>
      </section>
      <section>
        <input
          type="checkbox"
          id="css"
          name="disponibilidade"
          value={"Tem disponibilidade"}
          onChange={onChangeDisponibilidade}
          checked={disponibilidade}
        />
        <label for="css">
          Tem disponibilidade para participar das atividades
        </label>
      </section>
      <button onClick={enviarDados}>Enviar dados</button>
    </Form>
  )
}

export default ConfirmationForm