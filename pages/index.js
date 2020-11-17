function estilo(){
    var style ={
        textAlign:"center",
        padding:"2px"
    }
    return style
}
import {useState} from 'react';


function Contador(){
    const [contador, setContador] = useState(0);

    function Resposta(){
        var respostas = ['Fala mano', 'Pois é', 'Não sei a resposta', 'Ainda não fui treinado', 'eu posso ser bem util']
        return respostas[contador]
    }
    var boot = 'Bily'    

    function adicionar(){
        if (contador < 4){
            setContador(contador + 1)
            
        }
    }
    function remover(){
        if (contador > 0){
            setContador(contador - 1)
        }
    }
    return(
        <div>
            <div>{contador}</div>
            <br></br>
            <button onClick={adicionar}>Adicionar</button>
            <button onClick={remover}>Remover</button>
            <br></br>
            <br></br>
            <div>
                <div>{boot}: <Resposta/></div>
            </div>
        </div>
    )
}

function estudo(){
    return <div style={estilo()}><h2>Seja bem <strong>vindo</strong> NextJs</h2> <Contador/> </div>
}
export default estudo;
