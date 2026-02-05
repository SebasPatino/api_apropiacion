// ==================================================================================================================
// Parte 5: Análisis y verificación de respuestas
// ==================================================================================================================

// Solicitud 10: Realice una solicitud GET general y compare la estructura de la respuesta con
// las solicitudes anteriores, identificando cambios y comportamientos del servicio.

// Definimos una función llamada "obtenerPublicaciones"
// 1. Exportamos la función como ES Module para poder usarla en otros archivos.
//    La función es asíncrona porque trabajamos con "fetch" y promesas.
export const obtenerPublicaciones = async () => {
    // 2. Realizamos la petición HTTP al servidor en la ruta /posts
    //    No especificamos un id, por lo que pedimos TODAS las publicaciones disponibles.
    try {
        let pedido = await fetch('http://localhost:3000/posts', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        // 3. Convertimos la respuesta del servidor a formato JSON.
        //    El servidor devolverá un ARRAY de objetos (cada objeto es una publicación).
        let respuesta = await pedido.json();
        // 4. Retornamos el array completo de publicaciones.
        return respuesta;

    } catch (error) {
        // 5. Capturamos cualquier error que ocurra durante la solicitud o el parseo.
        console.error("❌ Error al obtener publicaciones:", error);
        return [];
    }
};