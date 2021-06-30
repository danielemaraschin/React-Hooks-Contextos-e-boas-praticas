import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  return (
    <>                  {/* colocar as propriedades ao enviar e validar CPF do elemento Dados pessoais*/}
      <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF}/>
      <DadosUsuario />
      <DadosEntrega/>
    </>
  );
}

export default FormularioCadastro;
