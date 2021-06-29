import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({aoEnviar, validarCPF}) {
    return (
      <>
   <DadosPessoais/>
   <DadosUsuario/>
   |</>
  );
}

export default FormularioCadastro;
