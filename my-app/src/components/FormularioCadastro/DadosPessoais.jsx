import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function DadosPessoais({aoEnviar, validacoes}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  const [erros, setErros] = useState({cpf:{valido:true, texto:""}})

  function validarCampos(event){
    const{name, value} = event.target;//como estamos trabalhando com forms controlados, o value é obrigatoriamente o estado do target
    const ehValido = validacoes[name](value);
    const novoEstado = {...erros, name:ehValido}
    setErros({novoEstado});
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}

        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="CPF"
        name="cpf" //add name to do validation
        label="CPF"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="promocoes"
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="novidades"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;
