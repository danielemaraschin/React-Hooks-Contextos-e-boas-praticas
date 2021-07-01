import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DadosUsuario({aoEnviar}) {
    const [email, setEmail] =useState("");
    const [senha, setSenha] = useState("");
    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            aoEnviar();
        }} > 
            <TextField id="email"
                label="email"
                type="email"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField id="senha"
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