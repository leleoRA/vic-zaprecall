import { useState } from "react"
import styled from "styled-components"
import play from "./img/play.png"
import setinha from "./img/setinha.png"
import close from "./img/close.png"
import help from "./img/help.png"
import checkmark from "./img/checkmark.png"

export default function Pergunta(props)
{
    const {topico, pergunta, resposta} = {...props};
    const [questao, setQuestao] = useState("pergunta-fechada");
    const [texto, setTexto] = useState(topico);
    const [botao, setBotao] = useState(play);
    const [decora, setDecora] = useState("none");
    const [showElement, setShowElement] = useState(false) 

    function virar()
    {
        if(botao === play)
        {
            setQuestao("pergunta-aberta");
            setTexto(pergunta);
            setBotao(setinha);
            setDecora("none");
        }
        if(botao === setinha)
        {
            setTexto(resposta);
            setBotao("");
            setShowElement(true);
            setDecora("none");
        }
        
    }

    function respondeu(r)
    {
        if(r === "nao")
        {
            setQuestao("pergunta-fechada");
            setTexto(topico);
            setDecora("vermelho");
            setBotao(close);
            setShowElement(false);
            
        }
        if(r === "quase")
        {
            setQuestao("pergunta-fechada");
            setTexto(topico);
            setDecora("laranja");
            setBotao(help);
            setShowElement(false);
            
        }
        if(r === "zap")
        {
            setQuestao("pergunta-fechada");
            setTexto(topico);
            setDecora("verde");
            setBotao(checkmark);
            setShowElement(false);
            
        }
    }

    return(
        <Container>
                <div className ={questao}> <Resposta> <p className={decora}>{texto}</p> </Resposta>
                <img onClick={() => virar()} src={botao} alt = ""></img>
                <Botoes>
                { showElement ? <BotaoVermelho><button onClick={ () => respondeu("nao")}>Não lembrei</button></BotaoVermelho> : true }
                { showElement ? <BotaoLaranja><button onClick={() => respondeu("quase")}>Quase não lembrei</button></BotaoLaranja> : true }
                { showElement ? <BotaoVerde><button onClick={() => respondeu("zap")}>Zap!</button></BotaoVerde> : true }
                </Botoes>
            </div>
        </Container>
    );
}

const Container = styled.div`
.pergunta-fechada{
width: 300px;
height: 35px;
background-color: #FFFFFF;
margin: 12px;
padding: 15px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #333333;
text-decoration-line: none;
text-decoration-color: none;
display: flex;
align-items: center;
justify-content: space-between;
& > img{
    width: 20px;
}}

.pergunta-aberta{
width: 300px;
margin: 12px;
padding: 15px;
min-height: 100px;
background: #FFFFD5;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #333333;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
& > img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
}
`
const Botoes = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const BotaoVermelho = styled.button`
width: 90px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
text-align: center;
padding:5px;
background-color: #FF3030;
border: 1px solid #FF3030;
border-radius: 5px;
`

const BotaoLaranja = styled.button`
width: 90px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
text-align: center;
padding:5px;
background-color: #FF922E;
border: 1px solid #FF922E;
border-radius: 5px;
`

const BotaoVerde = styled.button`
width: 90px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
text-align: center;
padding:5px;
background-color: #2FBE34;
border: 1px solid #2FBE34;
border-radius: 5px;
`

const Resposta = styled.p`
.vermelho{
    text-decoration-line: line-through;
    text-decoration-color: #FF3030;
    color: #FF3030;
  }

  .laranja{
    text-decoration-line: line-through;
    text-decoration-color: #FF922E;
    color: #FF922E;
  }

 .verde{
    text-decoration-line: line-through;
    text-decoration-color: #2FBE34;
    color: #2FBE34;
  }
`