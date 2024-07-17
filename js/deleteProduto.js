// DELETE PRODUCT

import { conectaApi } from "./conectaApi.js";

async function deleteProduto(produtoId) {
    try {
        await conectaApi.deleteProduto(produtoId);
    } catch (error) {
        console.error("Erro ao deletar produto:", error);
    }

    window.location.reload(true);
}

export { deleteProduto }; 
