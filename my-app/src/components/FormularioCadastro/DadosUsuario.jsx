import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import validacoesCadastro from "../../contexts/validacoesCadastro";


function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erros, setErros] = useState({ senha: {valido:true, texto:""} });

    const validacoes = useContext(validacoesCadastro)
    
    function possoEnviar(){
        for(let campo in erros){
            if(!erros[campo].valido)
            {
            return false
            }
        }
        return true;
    }

        return (
            <form onSubmit={(event) => {
                event.preventDefault();
                if(possoEnviar()){
                    aoEnviar({ email, senha }); //estados desse form são o objeto email e senha
                }               
            }} >
                <TextField
                    value={email}
                    onChange={(event) => { setEmail(event.target.value) }}
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
                    onChange={(event) => {
                         setSenha(event.target.value); 
                    }}
                    onBlur={validarCampos}
                    error={!erros.senha.valido}
                    helperText={erros.senha.texto}
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
                    Próximo
                </Button>
            </form>
        );
    }


export default DadosUsuario;