import React, { useState } from 'react'
import { MainContainer } from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [emailComfirm, setEmailComfirm] = useState("")
  const [formFlow, setFormFlow] = useState(1) //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

  const onChangeName = (event) => {
    setName(event.target.value)
  }

  const onChangeAge = (event) => {
    setAge(event.target.value)
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangeEmailComfirm = (event) => {
    setEmailComfirm(event.target.value)
  }

  const sendData = () => {
    // cada if irá emitir um alert personalizado para cada input indevidamente preenchido
    if (age < 18) {
      alert("Precisa ser maior de Idade");
    }
    if (name.length < 10 || name.length > 30) {
      alert("O nome precisa ter no mínimo 10 e no máximo 30 letras");
    }
    if (email.includes("@") === false) {
      alert("Seu email precisa ter o símbolo de @");
    }
    if (email !== emailComfirm) {
      alert("O email de confirmação está diferente");
    }
    //este if verifica se todas as condições foran atendidas e caso tenham sido, passa para a próxima página
    if (
      age >= 18 &&
      name.length > 10 &&
      name.length < 30 &&
      email.includes("@") &&
      email === emailComfirm
    ) {
      setFormFlow(2);
    } else {
      alert("Corrija");
    }
  };

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {/* usando ternário para renderizar NameForm, ou ConfirmationForm  */}
      {formFlow === 1 ? (
        <NameForm
          //passando props para o componente NameForm
          name={name}
          age={age}
          email={email}
          emailComfirm={emailComfirm}
          onChangeName={onChangeName}
          onChangeAge={onChangeAge}
          onChangeEmail={onChangeEmail}
          onChangeEmailComfirm={onChangeEmailComfirm}
          sendData={sendData}
        />
      ) : (
        <ConfirmationForm
          //passando props para o componente ConfirmationForm
          setFormFlow={setFormFlow}
        />
      )}
    </MainContainer>
  );
};

export default MainPage