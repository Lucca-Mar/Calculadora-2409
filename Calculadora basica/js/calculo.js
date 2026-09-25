var n1 = document.querySelector('#n1');
var n2 = document.querySelector('#n2');
var resultado  = document.querySelector('#resultado');

function somar(){
    resultado.innerHTML = Number(n1.value) + Number(n2.value);
}
function subtrair(){
    resultado.innerHTML = Number(n1.value) - Number(n2.value);
}
function multiplicacao(){
    resultado.innerHTML = Number(n1.value) * Number(n2.value);
}
function divisao(){
 resultado.innerHTML = Number(n1.value) / Number(n2.value);
}
function areaquadrado(){
    resultado.innerHTML = Number(n1.value) * Number(n2.value);
}

