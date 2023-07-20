import './ListaSuspensa.css'


const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value=""></option>  {/* essa tag foi inserida para que no formulario ao ser recaregado, essa lista suspensa nao exima nenhum valor antes de ser selecionado. */}
                {props.itens.map(item => {
                    return <option key={item}> {item}</option>
                })} {/* esse map é feito para criar uma option para cada item do array na lista suspensa */}
            </select>
        </div>
    )
}

export default ListaSuspensa