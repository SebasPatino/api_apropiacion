// ==================================================================================================================
// Parte 3: Actualización de información (PUT y PATCH)
// ==================================================================================================================

// Solicitud 7: Realice una solicitud PATCH para modificar únicamente un campo específico
// de esa publicación.

// Definimos una función llamada "actualizarPatch"
// 1. Exportamos la función como ES Module para poder usarla en otros archivos.
//    La función es asíncrona porque trabajamos con "fetch" y promesas.
export const actualizarPatch = async (id, campo, valor) => {
    // 2. Realizamos la petición HTTP al servidor en la ruta /posts/:id
    //    Usamos el método PATCH porque queremos modificar SOLO algunos campos.
    let pedido = await fetch(`http://localhost:3000/posts/${id}`, {
        // 3. Definimos el método de la solicitud como PATCH.
        method: 'PATCH',
        // 4. Enviamos el cuerpo (body) de la solicitud en formato JSON.
        //    Aquí pasamos únicamente el campo que queremos actualizar.
        body: JSON.stringify({
            [campo]: valor
        }),
        // 5. Definimos los encabezados (headers).
        //    Es importante indicar que el contenido que enviamos es JSON.
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    // 6. Esperamos la respuesta del servidor y la convertimos a formato JSON.
    let respuesta = await pedido.json();
    // 7. Retornamos la respuesta ya convertida en objeto de JavaScript.
    return respuesta;
};