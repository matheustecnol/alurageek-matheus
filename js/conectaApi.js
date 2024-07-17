async function listaProduto() {
    const conexao = await fetch("http://localhost:3000/products");
console.log(conexao);

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaProduto(image, name, price) {
    const conexao = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            image: image,
            name: name,
            price: price,            
        })
    });

    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

async function deleteProduto(produtoId) {
    try {
        const connection = await fetch(`http://localhost:3000/products/${produtoId}`, {
            method: "DELETE",
        });
        const data = await connection.json();
        console.log(data); 
    } catch (error) {
        console.error("Erro ao deletar produto:", error);
        throw error;
    }
}


export const conectaApi = { 
    listaProduto,
    criaProduto,
    deleteProduto
}