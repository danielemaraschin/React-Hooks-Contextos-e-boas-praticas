import React, { useState } from "react"; //importar o useState para poder usar esse hook

function useErros() {
    const [erros, setErros] = useState({ senha: {valido:true, texto:""} }); //essa funcao tem um estado do react que é um hook customizado
    
    function validarCampos(event) {
        const { name, value } = event.target;//como estamos trabalhando com forms controlados, o value é obrigatoriamente o estado do target
        const novoEstado = { ...erros };
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado);
    }

    return[erros, validarCampos];
}

export default useErros;






