import React, { useEffect, useState } from "react"


function Exemplo1(){
    const [count, setCount] = useState(0);
    let contagem2 = 0;

    useEffect(() => {
        document.title = `Você clicou ${count} vezes`;
    }
    );

    function incrementar(){
        setCount(count + 1)
    }

    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <h1>Contagem {count}</h1>
            <button onClick={incrementar}>Adicionar</button>

        </div>
    )
}

export default Exemplo1;