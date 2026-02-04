console.log("Olá, JavaScript!");

let a = 10;
let b = 3;

console.log("Adição: ",a + b); // Adição
console.log("Subtração: ",a - b); // Subtração
console.log("Multiplicação: ",a * b); // Multiplicação
console.log("Divisão: ",a / b); // Divisão
console.log("Resto de divisão: ",a % b); // Resto de divisão
console.log("Exponenciação: ",a ** b); // Exponenciação

let contador = 5;
contador++;
console.log("Contador:",contador);

//Média de três números
let c = 7;
let d = 9;
let e = 8;

let media =(c + d + e ) /3;
console.log("Média:", media);

//Resto de divisão
let g = 30;
let h = 7;

console.log("Resto de Divisão: ",g % h);


let x = 10;
let y = "10";

console.log(x == y); 
console.log(x === y); 
console.log(x != y); 
console.log(x !== y);

//Exercícios 04/02/26

//3-
let idade = 33;
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

//4-
let numero1 = 38;
let numero2 = 58;
if (numero1 > numero2) {
    console.log("O maior número é: " + numero1);
}
else if (numero2 > numero1) {
    console.log("O maior número é: " + numero2);
}
else {
    console.log("Os números são iguais.");
}

//Operadorees lógicos 

console.log("Operadores Lógicos:");

let idade2 = 20;
let temCarteira = true;

console.log(idade2 >= 18 && temCarteira); // true
console.log("&& = E/AND");

//------------------------------------
let chovendo = false;
let guardaChuva = true;

console.log(chovendo || guardaChuva); // true
console.log("|| = OU/OR");

//------------------------------------

let ligado = false;
console.log(!ligado); // true

console.log("! = INVERSO/NOT");

//5-
console.log("Aluno foi aprovado ou reprovado:");
let media2 = 7.5;
let frequencia = 85;

if (media2 >= 7 && frequencia >= 75) {
    console.log("Aprovado");
    } else {
    console.log("Reprovado");
}

//6-
console.log("Verificar acesso com login OU token:");
let login = true;
let token = false;

if (login || token) {
    console.log("Acesso concedido");
} else {
    console.log("Acesso negado");
}