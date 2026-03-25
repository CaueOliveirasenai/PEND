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
console.log("Criar função que calcula IMC");

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

// entrada do usuário
let peso = Number(prompt("Digite seu peso (kg):"));
let altura = Number(prompt("Digite sua altura (m):"));

let imc = calcularIMC(peso, altura);
console.log("IMC:", imc.toFixed(2));

//8-

console.log("Criar função que verifica se um número é par ou ímpar");

function verificarParImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

let numero = Number(prompt("Digite um número:"));
let resultado = verificarParImpar(numero);

console.log("O número", numero, "é", resultado);

console.log("Funções Nativas (data e hora): ");

let agora = new Date();
console.log(agora);
