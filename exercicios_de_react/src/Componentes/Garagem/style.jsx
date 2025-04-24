import styled from "styled-components"

export const BotaoLaranja=styled.button `
background-color: orange;
border: none;
padding: 10px;

`

export const GaragemContainer = styled.main `
display: flex;
flex-direction: column;
align-items: center;
`

export const GaragemEstacionamento = styled.section `
display: grid;
grid-template-columns: 1fr 1fr;
gap: 30px;
margin: 20px;

li{
    list-style: none;

}
`