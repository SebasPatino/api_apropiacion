// ==================================================================================================================
// Parte 3: Actualización de información (PUT y PATCH)
// ==================================================================================================================

// Solicitud 6: Realice una solicitud PUT para actualizar completamente la información de una
// publicación existente.

// Definimos una función llamada "actualizarPut"
// Exportamos la función como ES Module
export const actualizarPut = async (id, userId, title, body) => {
    // Realizamos la petición HTTP al servidor en la ruta /posts/:id
    let pedido = await fetch(`http://localhost:3000/posts/${id}`, {
        // Método PUT reemplaza toda la información del recurso
        method: 'PUT', 
        body: JSON.stringify({
            id,
            userId,
            title,
            body
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    // Convertimos la respuesta del servidor a formato JSON
    let respuesta = await pedido.json();
    // Retornamos la publicación actualizada
    return respuesta;
};