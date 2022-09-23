function validarDigito(){
    var nome, idade, sexo, endereço, rg;
    
    nome = document.getElementById("Nome").value;
    idade = document.getElementById("Idade").value;
    sexo = document.getElementById("Sexo");
    endereço = document.getElementById("Endereço").value;
    rg = document.getElementById("RG").value;
    
    var valorSexo = sexo.options[sexo.selectedIndex].value;
    
    
    // Se Nome Vazio pede pra preencher
    if(document.getElementById("Nome").value == ""){
        alert("Preencha o campo Nome")
        document.getElementById("Nome").focus();
        return false;
    };
    // Se Sexo Vazio pede pra preencher
    if(document.getElementById("Sexo").value == 3){
        alert("Esxolha seu Sexo")
        document.getElementById("Sexo").focus();
        return false;
    };
    // Se Idade Vazio pede pra preencher
    if(document.getElementById("Idade").value == ""){
        alert("Preencha o campo Idade")
        document.getElementById("Idade").focus();
        return false;
    };
    // Se Endereço Vazio pede pra preencher
    if(document.getElementById("Endereço").value == ""){
        alert("Preencha o campo Endereço")
        document.getElementById("Endereço").focus();
        return false;
    };
    // Se RG Vazio pede pra preencher
    if(document.getElementById("RG").value == ""){
        alert("Preencha o campo RG")
        document.getElementById("RG").focus();
        return false;
    };
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
        document.getElementById("CPF_Result").innerHTML = `Olá ${nome}, de ${idade} anos, do sexo ${valorSexo}, que mora na rua ${endereço} com o CPF ${cpf1} que é válido e o RG ${rg}`
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
function validarRG(){
    document.getElementById("RG").addEventListener('keyup', function(e){
        if(!checkChar(e)){
            e.preventDefault();
            return false;
        }
    });
}
function Novamente() {
    document.getElementById("result").classList.add("esconder");
    document.getElementById("formu").classList.remove("esconder");
    document.getElementById("result").classList.remove("botao1");
}
function timer(){
    const hoje = new Date();
    let h = hoje.getHours();
    let m = hoje.getMinutes();
    let s = hoje.getSeconds();
    m = cehckTime(m);
    s = cehckTime(s);
    document.getElementById("data").innerHTML= `Agora são  ${h}:${m}:${s}`;
    setTimeout(timer, 1000);
}
function cehckTime(i){
    if(i<10){
        i ="0"+i
    }
    return i;
}
/*const CPFInput = document.querySelector('#CPF');
const RGInput = document.querySelector('#RG');
CPFInput.addEventListener('keypress', function(e){
    if(!checkChar(e)){
        e.preventDefault();
    }
});
RGInput.addEventListener('keypress', function(e){
    if(!checkChar(e)){
        e.preventDefault();
    }
});
function checkChar(e){
    var char = String.fromCharCode(e.keyCode);
    console.log(char);
    var pattern = '[x X 0-9]'
    if(char.match(pattern)){
        return true;
    }
}*/
/*document.addEventListener('keydown', function(event){
    var i = document.getElementById("CPF").value.length;
    var v = document.getElementById("RG").value.length;
    if(i === 3 || i === 7){
        document.getElementById("CPF").value = document.getElementById("CPF").value +".";
    }else if(i === 11){
        document.getElementById("CPF").value = document.getElementById("CPF").value +"-";
    }
    if(v === 2 || v === 6){
        document.getElementById("RG").value = document.getElementById("RG").value +".";
    }else if(v === 10){
        document.getElementById("RG").value = document.getElementById("RG").value +"-";
    }
});
function validarRg(){
    
}*/
/**/
/**/