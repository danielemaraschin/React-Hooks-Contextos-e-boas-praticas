import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import 'fontsource-roboto';
import { validarCPF, validarSenha } from "./models/cadastro";
import {Container, Typography } from "@material-ui/core"
import validacoesCadastro from "./contexts/validacoesCadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>    
        <validacoesCadastro.Provider value={{cpf:validarCPF, senha:validarSenha, nome:validarSenha}}>
        <FormularioCadastro aoEnviar={aoEnviarForm} />
        </validacoesCadastro.Provider>
      </Container>                                                                                     
    );
  }
}
//formularioCadastro so é uma máquina de renderização que a partir de sua mudança de estado (etapaAtual) 
//define quando e quem deve mudar o estado (os outros formularios)
function aoEnviarForm(dados){
  console.log(dados);
}


export default App;
