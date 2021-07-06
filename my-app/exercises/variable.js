
  function validarCampos(event){
    const{name, value} = event.target;
    const ehValido=  validacoes[name](value);
    const novoEstado = {...erros, name:ehValido};
    setErros({novoEstado});
  }

  