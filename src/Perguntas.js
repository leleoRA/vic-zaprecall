import Pergunta from "./Pergunta"

export default function Perguntas(props) {
    const { quizz } = props
    console.log(quizz)
    return (
        <>
            {quizz.map((p, index) => <Pergunta key={index} topico={p.topico} pergunta ={p.pergunta} resposta={p.resposta}/>)}
        </>
    )
}