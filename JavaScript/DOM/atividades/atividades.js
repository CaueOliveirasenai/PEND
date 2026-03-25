//atividade 1
let botaoAzul = document.querySelector("#azul");
let botaoVermelho = document.querySelector("#vermelho");

azul.addEventListener('click', function() {
    document.querySelector("h1").style.color = 'blue';
});

vermelho.addEventListener('click', function() {
    document.querySelector("h1").style.color = 'red';
});

//atividade 2
let esconder = document.querySelector("#esconder");
let frase2 = document.querySelector("#frase2");

esconder.addEventListener('click', function() {
    frase2.classList.toggle("oculto");
});

//atividade 3
let contador = document.querySelector("#contador");
let inputTexto = document.querySelector("#inputTexto");

inputTexto.addEventListener('input', function() {
    contador.textContent = "Número de caracteres: " + inputTexto.value.length;
});

//atividade 4
let contadorCliques = document.querySelector("#contadorCliques");
let contadorResultado = document.querySelector("#contadorResultado");

contadorCliques.addEventListener('click', function() {
    let count = parseInt(contadorResultado.textContent) || 0;
    contadorResultado.textContent = count + 1;
});

//atividade 5
let input = document.getElementById("novoItem");
let botaoAdicionar = document.getElementById("adicionar");
let lista = document.getElementById("lista");

botaoAdicionar.addEventListener("click", function() {

    let texto = input.value;
    if (texto.trim() === "") {
        alert("Digite um item antes de adicionar!");
        texto.style.color = "red";
        
    }

    let li = document.createElement("li");
    li.textContent = texto;

    lista.appendChild(li);

    input.value = "";
});
//Atividade 6  e Atividade Extra- Remover elemento ao clicar e confirmar

lista.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        if (confirm("Deseja remover este item?")) {
            event.target.remove();
        }
    }
});

//Atividade Hard - Formulário de nome
let inputNome = document.getElementById("inputNome");
let botaoEnviar = document.getElementById("botaoEnviar");
let mensagem = document.getElementById("mensagem");

botaoEnviar.addEventListener("click", function() {
    if (inputNome.value.trim() === "") {
        mensagem.textContent = "O campo nome é obrigatório";
        mensagem.style.color = "red";
    } else {
        mensagem.textContent = "Nome enviado com sucesso!";
        mensagem.style.color = "green";
        inputNome.value = "";
    }
});