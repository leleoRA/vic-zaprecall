//import useState from "react"
import Perguntas from "./Perguntas"
import quizz from "./quizz"
import logo from "./img/logo-pequeno.png"
import styled from "styled-components"
import GlobalStyles from "./GlobalStyles"

export default function App() {
  return (
    <Conteudo>
      <Logo>
        <img src={logo} alt="Logotipo ZapRecall" />
      </Logo>
      <LogoH1>
        <h1>ZapRecall</h1>
      </LogoH1>
      <Perguntas quizz={quizz} />
      <GlobalStyles />
    </Conteudo>
  )
}

const Conteudo = styled.div`
background-color: #FB6B6B;
width: 100vw;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
margin: 0px;
padding: 0px;
padding-bottom: 200px;
`

const Logo = styled.div`
display: flex;
align-items: center;
margin: 40px 0 20px 0;
& > img{
  width: 52px;
}
`

const LogoH1 = styled.div`
font-family: 'Righteous';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 45px;
color: #FFFFFF;
margin-left: 20px;
`