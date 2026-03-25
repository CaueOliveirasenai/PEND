console.log("Funções Nativas (data e hora): ");
let agora = new Date();
console.log(agora);

function mostrarDataHora() {
    let data = new Date();

    console.log(" Dias atuais : ",data.getDate());
    console.log(" Mês Atual: ",data.getMonth() + 1);
    console.log(" Ano Atual:  ",data.getFullYear());
    console.log(" Hora Atual:  ",data.getHours());
    console.log(" Minutos :",data.getMinutes());
    console.log("Desafio")
    console.log("Hora/Minutos/Segundos Dias/Mês/Ano");
    console.log(data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds() + " " + data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear());
}
mostrarDataHora();

console.log("Funções Matemáticas (Math): ");
console.log(Math.PI);

function calcularOperacoes(numero) {
    console.log(" Raiz Quadrada:  ",Math.sqrt(numero));
    console.log(" Número inteiro mais próximo:  ",Math.round(numero));
    console.log(" Arredonda para cima: ",Math.ceil(numero));
    console.log(" Arredonda para baixo:  ",Math.floor(numero));
    console.log(" Valor absoluto:  ",Math.abs(numero));
    console.log(" Potência (número elevado a 2):  ",Math.pow(numero, 2));
}

calcularOperacoes(7.8); 

console.log("Funções de String: ");

function analisarTexto(texto) {
    console.log(" Número de caracteres: ",texto.length);
    console.log(" Texto em maiúsculas: ",texto.toUpperCase());
    console.log(" Texto em minúsculas: ",texto.toLowerCase());
}

analisarTexto("JavaScript");

console.log("Verifica se a frase contém a palavra 'JavaScript': ");
function verificarTexto(frase) {
    console.log(frase.includes("JavaScript"));
}
verificarTexto("Eu estudo JavaScript"); 


console.log("Desafio: Função que concatena nome e curso");
function concatena(nome, curso) {
    return "Aluno: " + nome + " | Curso: " + curso;
}

console.log(concatena("Caue", "JavaScript"));