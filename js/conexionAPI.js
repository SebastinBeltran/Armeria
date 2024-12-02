// const URL="https://67463ea4512ddbd807fb49ab.mockapi.io/productos"
const URL="http://localhost:3000/productos"

const listaProductos = async () =>{
    try{
        const conexion = await fetch(URL);
        const conexionConvertida = conexion.json()
        return conexionConvertida    
    }catch(error){
        console.log("Error al listar productos" + error)
    }
    
}

const createProduct = async (imagen,titulo,precio) =>{
    try {
        const conexion = await fetch(URL,
            {method:"POST",
            headers:{"Content-type":"application/json"},
            body: JSON.stringify({imagen,titulo,precio})
        }
        );
        const conexionConvertida = await conexion.json()
        return conexionConvertida
        
    } catch (error) {
        console.log("Error al crear productos ", error)
        
    }
}
async function deleteProduct(id){
    const Del_URL = `${URL}/${id}`
    try {
        const conexion = await fetch(Del_URL,
            {method:"DELETE"
        });        
        if (conexion.ok) {
            console.log("Producto eliminado exitosamente");
        } else {
            console.error("Error al eliminar el producto. Código de estado:", conexion.status);
        }        
    } catch (error) {
        console.log("Error al crear productos ", error)        
    }
}

async function buscarVideos(palabraClave){
    const conexion = await fetch(`${URL}?q=${palabraClave}`)
    const ConexionConvertida = conexion.json();
    return ConexionConvertida;    
}

export const productos = {
    listaProductos,createProduct,deleteProduct,buscarVideos
}