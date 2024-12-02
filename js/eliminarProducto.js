import { productos } from "./conexionAPI.js"

export function btn() {
    const botons = document.querySelectorAll(".btn-borrar")
    console.log("botones encontrados " + botons.length)
    botons.forEach(boton => {
        boton.addEventListener("click", async (evento) => {
            const id = evento.target.closest("button").getAttribute('data-id');
            try {
                Swal.fire({
                    background: "#0C1713",
                    title: "Estas seguro que deseas eliminar este producto?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "yellowgreen",
                    color: "white",
                    cancelButtonColor: "#d33",
                    cancelButtonText: "No",
                    confirmButtonText: "Si"
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            background: "#0C1713",
                            color: "white",
                            title: "El producto fue eliminado!",
                            icon: "success",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        productos.deleteProduct(id)
                        
                        
                    }
                });


            } catch (error) {
                console.log(error)
            }
        })
    })
}

