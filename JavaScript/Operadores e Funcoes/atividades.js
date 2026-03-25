function dataAtual() {
    let data = new Date();
    return data;
}
console.log("Data atual é: ", dataAtual());


console.log("Função para calcular a média de 2 números: ");
function calcularMedia(a, b) {
    
    let n1 = Number(prompt("Digite o primeiro número:"));
    let n2 = Number(prompt("Digite o segundo número:"));

    let soma = n1 + n2;
    let media = soma / 2;
      
    console.log("A soma dos números é: ", soma);
    console.log("A média dos números é: ", media);
    

}

calcularMedia();

console.log("Função que recebe um nome: ");
let nome = prompt("Digite seu nome: ");
function palavra(nome) {
    let nomeMaiusculo = nome.toUpperCase();
    let quantidadeLetras = nome.length;

    console.log("Nome em maiúsculo: ", nomeMaiusculo);
    console.log("Quantidade de letras: ", quantidadeLetras);
}
palavra(nome);


console.log("Função que verifica se possui a palavra HTML: ");
let frase = prompt("Digite uma frase: ");
function verificarHTML(frase) {
    if ( possuiHTML = frase.includes("HTML")) {
        console.log("A frase contém a palavra 'HTML'.");
    } else {
        console.log("A frase não contém a palavra 'HTML'.");
    }
    
}
verificarHTML(frase);