import React, { useState } from "react"; //importar o useState para poder usar esse hook

function useErros(validacoes) {
    const [erros, setErros] = useState({ senha: {valido:true, texto:""} }); //essa funcao tem um estado do react que é um hook customizado
    //quero q qm use esse hook useErros tenha acesso à validarCampos e o estado erros
    function validarCampos(event) {
        const { name, value } = event.target;//como estamos trabalhando com forms controlados, o value é obrigatoriamente o estado do target
        const novoEstado = { ...erros };
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado);
    }

    return[erros, validarCampos]; //retorna esse array c validarCampos e estado de erros (pq é oq quer usando esse hook useErros)
}

export default useErros;






