import { productos } from "./conexionAPI.js"
import { createCard } from "./mostrarProductos.js"
const titulo= document.querySelector(".titulo")

const barraBusqueda = document.querySelector(".buscar__input");
async function filtrarVideos(){
    const datosDeBusqueda = document.querySelector(".buscar__input").value;
    const busqueda = await productos.buscarVideos(datosDeBusqueda)
        
    const lista = document.querySelector(".bloqueProductos");
    while(lista.firstChild){
        lista.removeChild(lista.firstChild)
    }
    busqueda.forEach( find=>lista.appendChild(createCard(find)))    
    if(busqueda.length==0){
        titulo.textContent=`No se encontraron resultados para la busqueda de "${datosDeBusqueda}"`
    }else if(datosDeBusqueda==""){
        titulo.textContent=`LISTA DE PRODUCTOS`

    }
    else{
        titulo.textContent=`Resultados para la busqueda de "${datosDeBusqueda}"`
    }

}

barraBusqueda.addEventListener("keydown",async(evento)=>{
    if(evento.key == "Enter"){
        filtrarVideos()
        barraBusqueda.value=""
    }
})
