import React, { useState } from "react"; //importar o useState para poder usar esse hook

function useErros(validacoes) {

    const estadoInicial = criarEstadoInicial(validacoes);
    const [erros, setErros] = useState(estadoInicial); //essa funcao tem um estado do react que é um hook customizado
    //quero q qm use esse hook useErros tenha acesso à validarCampos e o estado erros
    function validarCampos(event) {
        const { name, value } = event.target;//como estamos trabalhando com forms controlados, o value é obrigatoriamente o estado do target
        const novoEstado = { ...erros };
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado);
    }

    function possoEnviar() {
        for (let campo in erros) {
            if (!erros[campo].valido) {
                return false
            }
        }
        return true;
    }

    return [erros, validarCampos, possoEnviar]; //retorna esse array c validarCampos e estado de erros (pq é oq quer usando esse hook useErros)
}

function criarEstadoInicial(validacoes) {
    const estadoInicial = {}
    for (let campo in validacoes) {
        estadoInicial[campo] = { valido: true, texto: "" }
    }
    return estadoInicial;

}

export default useErros;






