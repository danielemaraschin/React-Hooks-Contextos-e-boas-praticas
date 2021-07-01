import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DadosEntrega({aoEnviar}) {
    const [endereco, setEndereco]= useState("");
    const [cep, setCep] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("")
    return (
        <form>
            <TextField id="endereco"
                label="Endereço"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField id="cep"
                label="CEP"
                type="number"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField id="numero"
                label="Numero"
                type="number"
                variant="outlined"
                margin="normal"
              
            />
            <TextField id="estado"
                label="Estado"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField id="cidade"
                label="Cidade"
                type="text"
                variant="outlined"
                margin="normal"
            />
            <Button type="submit"
                variant="contained"
                margin="normal"
                color="primary">
                Cadastrar
            </Button>

        </form>

    )
}

export default DadosEntrega;