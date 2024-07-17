import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");

async function criarProduto(evento) {
    evento.preventDefault();

    const image = document.querySelector("[data-image]").value;
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    
    await conectaApi.criaProduto(image, name, price);
    
}

formulario.addEventListener("submit", evento => criarProduto(evento))