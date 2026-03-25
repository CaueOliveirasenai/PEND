document.getElementById("conteudo").innerHTML = "<p>Olá, mundo DOM!(innerHTML)</p>";

document.getElementById("mensagem").innerHTML = "Texto simples, sem HTML.(textContent)";

document.getElementById("foto").setAttribute("src", "https://cdn.dealeraccelerate.com/driver/1/446/16782/1920x1440/1996-toyota-chaser-tourer-v-jzx100");

let url = document.getElementById("link").getAttribute("href");
console.log(url); // "https://example.com"

document.getElementById("caixa").style.backgroundColor = "lightblue";

document.getElementById("alerta").classList.add("destaque");

document.getElementById("alert").classList.remove("oculto");

let novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Este elemento foi criado pelo JavaScript.";
document.getElementById("container").appendChild(novoParagrafo);

let novoItem = document.createElement("li");
novoItem.textContent = "Item novo";
document.getElementById("lista").appendChild(novoItem);

let item = document.getElementById("Item 1");
document.getElementById("list").removeChild(item);