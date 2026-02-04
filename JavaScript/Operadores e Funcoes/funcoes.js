function saudacao() {
    console.log("Olá, JavaScript!");
}

saudacao();

function somar(a, b) {
    return a + b;
}

console.log(somar(5, 3));


function saudacaoNome(nome) {
    console.log("Olá, " + nome);
}
saudacaoNome("Ana");


//7-
console.log("Calcular o IMC:");
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}
calcularIMC(80, 1.89);
console.log("Seu IMC é: " + calcularIMC(80, 1.89));

//8-
console.log("Verificar se o número é par ou ímpar:");
function verificarParImpar(numero) {
    if (numero % 2 === 0) { 
        return "O número " + numero + " é par.";
    }
    else {
        return "O número " + numero + " é ímpar.";
    }
}
console.log(verificarParImpar(7));
