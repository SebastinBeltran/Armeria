import { productos } from "./conexionAPI.js"
const form = document.querySelector(".formulario");

form.addEventListener("submit",async (evento)=>{
    evento.preventDefault();
    const fields = [
        { value: document.querySelector("[data-name]").value, message: "Campo nombre del producto está vacío!" },
        { value: document.querySelector("[data-price]").value, message: "Campo precio está vacío!" },
        { value: document.querySelector("[data-imagen]").value, message: "Campo imagen está vacío!" }
    ];
    try{
        for (const field of fields) {
            if (field.value == "") {
                Swal.fire({
                    background: "#0C1713",
                    color: "white",
                    icon: "error",
                    title: field.message,
                    showConfirmButton: false,
                    timer: 1500
                });
                return;
            }
        }
        
        const name = fields[0].value;
        const price = "$" + fields[1].value;
        const imagen = fields[2].value;
        
        await productos.createProduct(imagen, name, price);
    }
    
    catch (error) {
        console.log(error)
    }
    form.reset()
})