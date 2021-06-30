import React from "react";
import { TextField, Button } from "@material-ui/core";

function DadosUsuario() {
    return (
        <form>
            <TextField id="email"
                label="email"
                type="email"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField id="senha"
                label="senha"
                type="password"
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