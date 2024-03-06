import React, {useState} from "react";
import Pesquisa from '../pesquisa/pesquisa.js';

const Input = () => {
    const [valor_input, setValorInput] = useState('');
    const nome_cidade = (evento) => {
    setValorInput(evento.target.value);
    }
    return(
        <Pesquisa valor_input={valor_input} nome_cidade={nome_cidade}/>
    );
}

export default Input;