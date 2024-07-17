import { conectaApi } from "./conectaApi.js";
import {deleteProduto } from "./deleteProduto.js";


const lista = document.querySelector("[data-lista]");

function constroiCard(image, name, price, id) {
    const produto = document.createElement("div");
    produto.className = "produtos__visualizar__itens__grupos__card";
    produto.innerHTML = `

        <div class="card__imagem">
            <img class="card__imagem_img" src="${image}" alt="">
        </div>
        <div class="card__nome_cont">
            <h3 class="card__nome" >${name}</h3>
        </div>
        <div class="card__valor_cont">
            <h3 class="card__valor" >R$ ${price}</h3>
            <button class="card__button" id="${id}" data-form-delete><img src="assets/trash.svg" alt=""></button>
        </div>  
    
    `

    return produto;
}

async function listaProduto() {


    const listaApi = await conectaApi.listaProduto();


    listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.image, elemento.name, elemento.price, elemento.id)))


    const deleteBtns = document.querySelectorAll("[data-form-delete]");
    deleteBtns.forEach(btn => {
        btn.addEventListener("click", () => deleteProduto(btn.id));
    });
}








listaProduto();