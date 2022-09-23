function Mais(){
    var valor1, valor2, total;

    valor1 = parseInt(document.getElementById("valor1").value);
    valor2 = parseInt(document.getElementById("valor2").value);

    total = (valor1+valor2);

    alert(`O resultado da soma de ${valor1} + ${valor2} é = ${total}`)
}
function Menus(){
    var valor1, valor2, total;

    valor1 = parseInt(document.getElementById("valor1").value);
    valor2 = parseInt(document.getElementById("valor2").value);

    total = (valor1-valor2);

    alert(`O resultado da subtração de ${valor1} - ${valor2} é = ${total}`)
}
function Divisão(){
    var valor1, valor2, total;

    valor1 = parseInt(document.getElementById("valor1").value);
    valor2 = parseInt(document.getElementById("valor2").value);

    total = (valor1/valor2);

    alert(`O resultado de ${valor1} dividido por ${valor2} é = ${total}`)
    console.log(valor1 + valor2 +total)
}
function Multiplicação(){
    var valor1, valor2, total;

    valor1 = parseInt(document.getElementById("valor1").value);
    valor2 = parseInt(document.getElementById("valor2").value);

    total = (valor1*valor2);

    alert(`O resultado da Multiplicação de ${valor1} * ${valor2} é = ${total}`)
}