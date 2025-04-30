import React from 'react'
import { Form, Input } from '../MainPage/styles'

const NameForm = ({
  name,
  age,
  email,
  emailComfirm,
  onChangeName,
  onChangeAge,
  onChangeEmail,
  onChangeEmailComfirm,
  sendData
}) => {

  
  return (
    <Form>
      <label>
        Nome:
        <Input placeholder="Nome" value={name} onChange={onChangeName} />
      </label>
      <label>
        Idade:
        <Input placeholder="Idade" value={age} onChange={onChangeAge} />
      </label>
      <label>
        E-mail:
        <Input placeholder="usuario@usuario.com" value={email} onChange={onChangeEmail} />
      </label>
      <label>
        Confirmação de e-mail:
        <Input placeholder="usuario@usuario.com" value={emailComfirm} onChange={onChangeEmailComfirm} />
      </label>
      <button onClick={sendData}>Enviar dados</button>
    </Form>
  )
}

export default NameForm