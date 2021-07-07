import React, { useState, useEffect } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { Typography, Stepper, Step, StepLabel } from "@material-ui/core"
import { validarSenha, validarCPF } from "../../models/cadastro";

function FormularioCadastro({ aoEnviar }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});//usestate recebe objeto vazio

  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados);
    }
  })
  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant="h5">Obrigada por se cadastrar conosco!</Typography>
  ];
  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados }) //spread opeator para nao jogar
    // o objeto inteiro e sim cada atributo do dadosColetados no objeto que está criando
    console.log(dadosColetados);
    proximo();
  }
  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }
  return <>
    <Stepper activeStep={etapaAtual}>
      <Step><StepLabel>Login</StepLabel> </Step>
      <Step><StepLabel>Dados Pessoais</StepLabel> </Step>
      <Step><StepLabel>Finalização</StepLabel> </Step>
    </Stepper>
    {formularios[etapaAtual]}</>;
}

export default FormularioCadastro;
