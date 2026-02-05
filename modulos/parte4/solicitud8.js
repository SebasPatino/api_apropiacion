// ==================================================================================================================
// Parte 4: Eliminación de información (DELETE)
// ==================================================================================================================

// Solicitud 8: Realice una solicitud DELETE para eliminar una publicación existente.

// Definimos una función llamada "eliminar" que recibe como parámetro el id de la publicación
// 1. Exportamos la función como ES Module para poder usarla en otros archivos.
//    La función es asíncrona porque trabajamos con "fetch" y promesas.
export const eliminar = async (id) => {
    // 2. Realizamos la petición HTTP al servidor en la ruta /posts/:id
    //    Usamos el método DELETE porque queremos eliminar el recurso.
    let pedido = await fetch(`http://localhost:3000/posts/${id}`, {
        method: 'DELETE',
    });
    // 3. Normalmente el servidor devuelve un objeto vacío o confirmación.
    //    Convertimos la respuesta a JSON para mantener consistencia.
    let respuesta = await pedido.json().catch(() => ({}));
    // 4. Retornamos la respuesta (puede ser vacío o confirmación).
    return respuesta;
};