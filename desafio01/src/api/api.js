import {useState} from "react";

const Api = (valor_input) => {
        const API_key = '6f5046907653fa896c4eb28fbfc82b55';
        const [valor_tempo, setValorTempo] = useState('');
        const getApi = async () => {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${valor_input}&appid=${API_key}`);
        const data = await response.json();
        setValorTempo(data);
        }
        getApi();
    return(
        <div>
            <p>Capitais</p>
            <p>temperatura</p>
        </div>
    );
}

export default Api;