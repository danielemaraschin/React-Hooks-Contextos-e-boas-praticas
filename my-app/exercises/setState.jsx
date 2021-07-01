function Pessoa(){
    const [idade, setIdade] = useState(25);

    function aniversario(){
        setIdade(idade+1);
        console.log(idade);    
    }

    return(<>....</>);

}