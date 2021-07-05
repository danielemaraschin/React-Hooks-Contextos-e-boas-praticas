import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DadosUsuario({aoEnviar, validacoes}) {
    const [email, setEmail] =useState("");
    const [senha, setSenha] = useState("");


    function validarCampos(event){
        const{name, value} = event.target;//como estamos trabalhando com forms controlados, o value é obrigatoriamente o estado do target
        const ehValido = validacoes[name](value);
        const novoEstado = {...erros, name:ehValido}
        setErros({novoEstado});
     


    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            aoEnviar({email, senha}); //estados desse form são o objeto email e senha
        }} > 
            <TextField 
            value={email}
            onChange={(event)=> {setEmail(event.target.value)}}
                id="email"
                label="email"
                name="email"
                type="email"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField 
            value={senha}
            onChange={(event)=> {setSenha(event.target.value)}}
            onBlur={validarCampos}
            error={!erros.senha.valido}
                id="senha"
                label="senha"
                type="password"
                name="senha"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <Button type="submit"
                variant="contained"
                margin="normal"
                color="primary"
                fullWidth>
                Finalizar Cadastro
            </Button>
        </form>
    )
}

export default DadosUsuario;