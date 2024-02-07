import React from "react";
import './pesquisa.css'
import {Form} from 'react-bootstrap';


const Pesquisa = ({nome_cidade}) => {
    return (
        <>
          <Form.Control
            type="text"
            id="inputPassword5"
            onChange={nome_cidade}
            aria-describedby="passwordHelpBlock"
            placeholder="Insira aqui o nome da cidade"
          />
        </>
      );
}

export default Pesquisa;