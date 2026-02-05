// ==================================================================================================================
// Parte 5: Análisis y verificación de respuestas
// ==================================================================================================================

// Solicitud 9: Repita una solicitud GET sobre el recurso eliminado o modificado y analice la
// respuesta obtenida.

// Definimos una función llamada "consultarPublicacion" que recibe como parámetro el id de la publicación
// 1. Exportamos la función como ES Module para poder usarla en otros archivos.
//    La función es asíncrona porque trabajamos con "fetch" y promesas.
export const consultarPublicacion = async (id) => {
    // 2. Realizamos la petición HTTP al servidor en la ruta /posts/:id
    //    Usamos el método GET porque queremos leer el recurso.
    try {
        let pedido = await fetch(`http://localhost:3000/posts/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        // 3. Intentamos convertir la respuesta a JSON.
        //    Si el recurso existe, se transformará correctamente.
        //    Si fue eliminado, puede que el servidor devuelva un mensaje como "Not Found"
        //    y este paso puede lanzar un error.
        let respuesta = await pedido.json();
        // 4. Retornamos la respuesta ya convertida en objeto de JavaScript.
        return respuesta;

    } catch (error) {
        // 5. Capturamos cualquier error que ocurra durante la solicitud o el parseo.
        console.error("Error al consultar la publicación:", error);
        return null;
    }
};