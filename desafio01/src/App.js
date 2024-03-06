import Api from './api/api.js'
import Input from './input/input.js'
// import Capitais from './capitais/capitais.js';
import './App.css';
import React from 'react';


const App = () => {
  return(
    <>
    <p>Previsão do Tempo</p>
    <Input/>
    <Api/>
    {/* <Capitais/> */}
    </>
  );
}

// class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       input: '',

//     }
//   }

  



//   render(){
//     
//   }
// }

export default App;
