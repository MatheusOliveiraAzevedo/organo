import './CampoTexto.css'

const CampoTexto = (props) => {

    // let valor = "Matheus";

    //const [valor, setValor] = useState('') 
    //useState utilizado para atualizar o estado. A variavel Valor é utilizada para guardar a informação padrão. somente sera alterado a informação quando usar o setValor
    

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);

    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )


}

export default CampoTexto;