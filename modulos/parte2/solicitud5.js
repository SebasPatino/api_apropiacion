// ==================================================================================================================
// Parte 2: Solicitudes de consulta (GET)
// ==================================================================================================================

// Solicitud 5: Realice una solicitud POST para registrar un nuevo comentario relacionado con
// una publicación.

// 1. Exportamos la función como ES Module para poder usarla en otros archivos.
//    La función es asíncrona porque trabajamos con "fetch" y promesas.
export const crearNuevoComentario = async (postId, name, body) => {
    // 2. Realizamos la petición HTTP al servidor en la ruta /comments.
    //    Usamos el método POST porque queremos CREAR un nuevo recurso.
    let pedido = await fetch('http://localhost:3000/comments', {
        // 3. Definimos el método de la solicitud como POST.
        method: 'POST',
        // 4. Enviamos el cuerpo (body) de la solicitud en formato JSON.
        //    Aquí pasamos los datos del nuevo comentario:
        //    - postId: el id de la publicación a la que se asocia el comentario
        //    - name: el nombre del comentario
        //    - body: el contenido del comentario
        body: JSON.stringify({
            postId,
            name,
            body
        }),
        // 5. Definimos los encabezados (headers).
        //    Es importante indicar que el contenido que enviamos es JSON.
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    // 6. Esperamos la respuesta del servidor y la convertimos a formato JSON.
    //    Normalmente el servidor devuelve el objeto creado con su nuevo "id".
    let respuesta = await pedido.json();
    // 7. Retornamos la respuesta ya convertida en objeto de JavaScript.
    //    Esto permite que quien llame a la función pueda usar los datos fácilmente.
    return respuesta;
};