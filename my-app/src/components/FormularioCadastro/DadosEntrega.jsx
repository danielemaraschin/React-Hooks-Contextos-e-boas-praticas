import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DadosEntrega({aoEnviar}) {
    const [endereco, setEndereco]= useState("");
    const [cep, setCep] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("")
    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            aoEnviar({endereco, cep, numero, estado, cidade});
        }}>
            <TextField 
            value={endereco}
            onChange={(event) => {setEndereco(event.target.value)}}
            id="endereco"
                label="Endereço"
                type="text"
                name="endereco"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
            value={cep}
            onChange={(event) => {setCep(event.target.value)}}
                id="cep"
                label="CEP"
                type="number"
                name="cep"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField 
            value={numero}
            onChange={(event) => {setNumero(event.target.value)}}
                id="numero"
                label="Numero"
                type="number"
                name="numero"
                variant="outlined"
                margin="normal"
              
            />
            <TextField
            value={estado}
            onChange={(event) => {setEstado(event.target.value)}}
                id="estado"
                label="Estado"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
            value={cidade}
            onChange={(event) => {setCidade(event.target.value)}}
                id="cidade"
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