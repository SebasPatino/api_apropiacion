// ==================================================================================================================
// Parte 2: Solicitudes de consulta (GET)
// ==================================================================================================================

// Solicitud 4: Realice una solicitud POST para crear una nueva publicación asociada a un
// usuario existente.
// Incluya información como título y contenido.

// 1. Definimos una función llamada "crearPublicacionUsuarioExistente" que recibe tres parámetros:
export const crearPublicacionUsuarioExistente = async (userId, title, body) => {
    // 2. Realizamos la petición HTTP al servidor en la ruta /posts.
    //    Usamos el método POST porque queremos CREAR un nuevo recurso.
    let pedido = await fetch('http://localhost:3000/posts', {
        // 3. Definimos el método de la solicitud como POST.
        method: 'POST',
        // 4. Enviamos el cuerpo (body) de la solicitud en formato JSON.
        //    Aquí pasamos los datos de la nueva publicación:
        //    - userId: el usuario al que se asocia la publicación
        //    - title: el título de la publicación
        //    - body: el contenido de la publicación
        body: JSON.stringify({
            userId,
            title,
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