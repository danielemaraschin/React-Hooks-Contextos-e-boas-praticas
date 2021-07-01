import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DadosUsuario({aoEnviar, validarSenha}) {
    const [email, setEmail] =useState("");
    const [senha, setSenha] = useState("");
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
                type="email"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField 
            value={senha}
            onChange={(event)=> {setSenha(event.target.value)}}
                id="senha"
                label="senha"
                type="password"
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