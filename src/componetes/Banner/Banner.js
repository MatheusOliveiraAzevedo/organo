 import './Banner.css'
 import banner from '../../imagens/banner.png'
 
 function Banner() {
    return(
        <header className='banner'>
            <img src={banner} alt="O banner principal da pagina do Organo"/>
        </header>
    )

 }

 export default Banner