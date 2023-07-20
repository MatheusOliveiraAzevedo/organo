import './Rodape.css'
import midia1 from '../../imagens/rodape/fb.png'
import midia2 from '../../imagens/rodape/tw.png'
import midia3 from '../../imagens/rodape/ig.png'
import organo from '../../imagens/rodape/logo.png'

const Rodape =  () => {

    return(
        <footer className='rodape'>
            <section className='midiaRodape'>
                <ul>
                    <li>
                        <img src={midia1} alt="" className="midia" />
                    </li>
                    <li>
                        <img src={midia2} alt="" className="midia" />
                    </li>
                    <li>
                        <img src={midia3} alt="" className="midia" />
                    </li>
                </ul>
            </section>
            <img src={organo} alt="" className="imgRodape" />
            <h3>Desenvolvido por Alura.</h3>
        </footer>
    )
}

export default Rodape;