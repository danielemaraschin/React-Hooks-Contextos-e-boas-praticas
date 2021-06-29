import React from "react";
import { TextField} from "@material-ui/core";

function DadosUsuario(){
    return(
        <form>
            <TextField id="email" label="email" type="email"/>
        </form>
    )
}

export default DadosUsuario;