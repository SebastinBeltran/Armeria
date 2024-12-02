import { productos } from "./conexionAPI.js"
const form = document.querySelector(".formulario");

form.addEventListener("submit",async (evento)=>{
    evento.preventDefault();
    const name = document.querySelector("[data-name]").value;
    const price = "$" + document.querySelector("[data-price]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    try {
        await productos.createProduct(imagen,name,price);
    } catch (error) {
        console.log(error)
    }
    form.reset()
})