import React, { useEffect, useState } from 'react';
import Menu from '../components/Menu';


function Exemplo1(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Você clicou ${count} vezes`;
    }
    );

    function incrementar(){
        setCount(count + 1)
    }

    return(
        <div>
            <Menu />
                <div>
                    <h1>Contagem: {count}</h1>
                                <button onClick={incrementar} className="bg-azulEscuro text-branco rounded-lg w-24">
                    Adcionar
                                </button>
                </div>
      
        </div>
    )
}

export default Exemplo1;