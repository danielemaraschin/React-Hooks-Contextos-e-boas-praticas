import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  function proximo(){ 
    setEtapaAtual(etapaAtual+1);
  }

  function formularioAtual(etapa) {
    switch (etapa) {
      case 0:
        return <DadosUsuario aoEnviar={proximo}/>
      case 1:
        return <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />
      case 2:
        return <DadosEntrega />
      default:
        return <Typography>Erro ao selecionar formulário</Typography>
    }
  }
  return (
    <>                  {/* colocar as propriedades ao enviar e validar CPF do elemento Dados pessoais*/}
      {formularioAtual(etapaAtual)} {/*função q indica qual formulario renderizar*/}
    </>
  );
}


export default FormularioCadastro;
