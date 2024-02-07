import Pesquisa from './pesquisa/pesquisa.js';
// import Capitais from './capitais/capitais.js';
import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor(){
    super()
    this.state = {
      input: '',

    }
  }

  nome_cidade = (evento) => {
    this.setState({input: evento.target.value})
    console.log("oi")
  }



  render(){
    return(
      <div>
      <p>Previsão do Tempo</p>
      <Pesquisa/>
      <p className='avc'>a</p>
      {/* <Capitais/> */}
      </div>
    );
  }
}

export default App;
