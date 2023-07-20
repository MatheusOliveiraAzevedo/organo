import Banner from './componetes/Banner/Banner';
import Formulario from './componetes/Formulario';
import { useState } from 'react';
import Time from './componetes/Time';
import Rodape from './componetes/Rodape';


function App() {

  const times = [
    
    {
      Nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9"
    },
    {
      Nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF"
    },
    {
      Nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2"
    },
    {
      Nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8"
    },
    {
      Nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5"
    },
    {
      Nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9"
    },
    {
      Nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF"
    },
  ]

  const [colaboradores, setColaboradores] = useState ([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador]);
  }


  return (

    <div className="App">
      <Banner/>
      <Formulario
      nomeDosTimes={times.map(timesNomes => timesNomes.Nome)} 
      aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} 
      />
      {times.map(time => 
      <Time 
      key={time.Nome} 
      nome={time.Nome} 
      corPrincipal={time.corPrimaria} 
      corFundo={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.Nome)}
      />
      )}
      <Rodape/>
    </div>
  );
}

export default App;
