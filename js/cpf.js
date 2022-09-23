function validarDigito(){
    var cpf1 = document.getElementById("CPF").value;
    // Se CPF Vazio pede pra preencher
    if(document.getElementById("CPF").value == ""){
        alert("Preencha o campo CPF")
        document.getElementById("CPF").focus();
        return false;
    };
    
    const cpf = document.getElementById("CPF").value.split('').map((e) => parseInt(e));// pegando CPF do Input
    const cpfValido = validarCpfReal(cpf)

    function validarPrimeiroDigito(cpf){ //validando o Primeiro Digito
        let zero = 0;
        for (let i = 0; i < 9; i++) {
            zero += cpf[i] * (10 - i);
        }
        const resto = (zero * 10) % 11;
        if (resto < 10) {
            return cpf[9] == resto;
        }
        return cpf[9] == 0;
    }
    function validarSegundoDigito(cpf){ //Validando o segundo digito
        let zero = 0;
        for (let i = 0; i < 10; i++) {
            zero += cpf[i] * (11 - i);
        }
        const resto = (zero * 10) % 11;
        if (resto < 10) {
            return cpf[10] == resto;
        }else{
            return cpf[10] == 0;
        }
    }
    
    function validarCpfReal(cpf){ // Validando se o Cpf é verdadeiro
        if(cpf1.length != 11) {
            alert(`O CPF ${cpf1} é inválido`)
            return false;
        }
        if(!validarPrimeiroDigito(cpf)){
            alert(`O CPF ${cpf1} é inválido`)
            return false;
        }
        if (!validarSegundoDigito(cpf)) {
            
            alert(`O CPF ${cpf1} é inválido`)
            return false;
        }
        alert(`O CPF ${cpf1} é válido`)
        document.getElementById("formu").classList.add("esconder")
        document.getElementById("result").classList.remove("esconder");
        document.getElementById("result").classList.add("botao1");
        document.getElementById("CPF_Result").innerHTML = `O CPF informado ${cpf1} é válido`
        return true;
    }
    console.log(cpfValido)

}
function validarCPF(){ 
const CPFInput = document.querySelector('#CPF');
CPFInput.addEventListener('keypress', function(e){
    if(!checkChar(e)){
        e.preventDefault();
        alert("Digite apenas números")
    }
});
}
function checkChar(e){
    var char = String.fromCharCode(e.keyCode);
    console.log(char);
    var pattern = '[x X 0-9]'
    if(char.match(pattern)){
        return true;
    }
}
function Novamente() {
    document.getElementById("result").classList.add("esconder");
    document.getElementById("formu").classList.remove("esconder");
    document.getElementById("result").classList.remove("botao1");
}