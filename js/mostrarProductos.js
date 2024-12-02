import { productos } from "./conexionAPI.js"
import { btn } from "./eliminarProducto.js"

const contenedor = document.querySelector(".bloqueProductos")

export function createCard({ titulo, precio, imagen, id }) {
    const card = document.createElement("div")
    card.classList.add("card");
    card.innerHTML = `            
        <img src="${imagen}" height="200px" width="200px" alt="">
        <div class="info">
            <div class="texto">
                <h3>${titulo}</h3>
                <p>${precio}</p>
            </div>
            <button class="btn-borrar" data-id=${id}>
            <img src="img/broken.png" height="30px">        
            </button>  
        </div>
        
    `
    return card;
}

const renderProductos = async () => {
    try {
        const listProduct = await productos.listaProductos()
        listProduct.forEach(product => {
            const productCard = createCard(product);
            contenedor.appendChild(productCard)

        });
    } catch (error) {
        console.log(error)
    }
    btn()

}
renderProductos()