import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import 'fontsource-roboto';
import { validarCPF, validarSenha } from "./models/cadastro";

import {Container, Typography } from "@material-ui/core"
class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>      {/*1{} CODE JS*/}
        <FormularioCadastro aoEnviar={aoEnviarForm} validacoes={{cpf:validarCPF, senha:validarSenha}}/> {/*2 {{}} OBJECT JS*/}
                                                    { /*no campo cpf usa a function validar cpf; no campo senha usa validar*/}
                                              
      </Container>                                                                                     
    );
  }
}

function aoEnviarForm(dados){
  console.log(dados);
}


export default App;
