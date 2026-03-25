let inputEmail = document.getElementById("inputEmail");
let inputSenha = document.getElementById("inputSenha");
let botaoEnviar = document.getElementById("botaoEnviar");
let mensagemsenha = document.getElementById("mensagemsenha");
let mensagememail = document.getElementById("mensagememail");

botaoEnviar.addEventListener("click", function () {
    let email = inputEmail.value;

    if (!email.includes('@') || !email.includes('.')) {
        mensagememail.textContent = "Email inválido. Exemplo: usuario@email.com";
        mensagememail.style.color = "red";
    } else {
        mensagememail.textContent = "Email válido !";
        mensagememail.style.color = "green";
    }

});

inputSenha.addEventListener("input", function () {
    if (inputSenha.value.length < 6) {
        mensagemsenha.textContent = "Senha fraca !";
        mensagemsenha.style.color = "red";
    } else if (inputSenha.value.length <= 10) {
        mensagemsenha.textContent = "Senha aceitavél..";
        mensagemsenha.style.color = "orange";
    } else {
        mensagemsenha.textContent = "Senha forte ! ";
        mensagemsenha.style.color = "green";
    }
});

