// ==================================================================================================================
// Parte 1: Solicitudes de consulta (GET)
// ==================================================================================================================

// Solicitud 1: Realice una solicitud GET para obtener la lista completa de usuarios disponibles
// en el servicio.

// Definimos una función asíncrona llamada "solicitarUsuarios"
const solicitarUsuarios = async () => {
    // 1. Realizamos la petición HTTP GET al servidor en la ruta /users
    let pedido = await fetch('http://localhost:3000/users/');
    // 2. Esperamos la respuesta y la convertimos a formato JSON
    let respuesta = await pedido.json();
    // 3. Retornamos la respuesta ya convertida en objeto/array de JavaScript
    return respuesta;
}

// // 4. Ejecutamos la función "solicitarUsuarios"
// // Como devuelve una promesa, usamos .then() para manejar el resultado
// solicitarUsuarios().then((data) => {
//     // 5. Mostramos en consola la lista completa de usuarios obtenidos
//     console.log(data);
//     }
// )

// ------------------------------------------------------------------------------------------------------------------
// Solicitud 2: Realice una solicitud GET para consultar la información de un usuario
// específico, utilizando su identificador.

// Definimos una función asíncrona llamada "solicitarUsuarioEspecifico"
const solicitarUsuarioEspecifico = async () => {
    // 1. Realizamos la petición HTTP GET al servidor en la ruta /users/1 
    // Esto significa que estamos consultando el usuario con id = 1
    let pedido = await fetch('http://localhost:3000/users/1');
    // 2. Esperamos la respuesta y la convertimos a formato JSON
    // El servidor devuelve los datos del usuario en formato JSON
    let respuesta = await pedido.json();
    // 3. Retornamos la respuesta ya convertida en objeto de JavaScript
    return respuesta;
}

// // 4. Ejecutamos la función "solicitarUsuarioEspecifico"
// // Como devuelve una promesa, usamos .then() para manejar el resultado
// solicitarUsuarioEspecifico().then((data) => {
//     // 5. Mostramos en consola la información del usuario con id = 1
//     console.log(data);
//     }
// )

// ------------------------------------------------------------------------------------------------------------------
// Solicitud 3: Realice una solicitud GET para obtener todas las publicaciones (posts)
// asociadas a un usuario determinado.

// Definimos una función asíncrona que recibe como parámetro el id del usuario
const solicitarPostsUsuario = async (userId) => {
    // 1. Realizamos la petición HTTP GET al servidor
    // Usamos query params (?userId=...) para filtrar las publicaciones
    // y obtener solo las que pertenecen al usuario indicado.
    let pedido = await fetch(`http://localhost:3000/posts?userId=${userId}`);
    // 2. Esperamos la respuesta y la convertimos a formato JSON
    // El servidor devuelve un array de publicaciones asociadas a ese usuario.
    let respuesta = await pedido.json();
    // 3. Retornamos la respuesta ya convertida en objeto/array de JavaScript
    return respuesta;
}

// // 4. Ejecutamos la función "solicitarPostsUsuario" pasando el id del usuario (2)
// // Como devuelve una promesa, usamos .then() para manejar el resultado
// solicitarPostsUsuario('2').then((data) => {
//     // 5. Mostramos en consola las publicaciones asociadas al usuario con id = 2
//     console.log(data);
//     }
// )

// ==================================================================================================================
// Parte 2: Solicitudes de consulta (GET)
// ==================================================================================================================

// Solicitud 4: Realice una solicitud POST para crear una nueva publicación asociada a un
// usuario existente.
// Incluya información como título y contenido.

// Definimos una función llamada "crearPublicacionUsuarioExistente"
const crearPublicacionUsuarioExistente = () => {
    // 1. Usamos fetch para hacer una solicitud HTTP al servidor en la ruta /posts
    fetch('http://localhost:3000/posts', {
    // 2. Indicamos que el método de la solicitud es POST (crear un recurso nuevo)
    method: 'POST',
    // 3. Enviamos el cuerpo de la solicitud en formato JSON
    // Aquí definimos los datos de la nueva publicación:
    // - userId: el usuario al que se asocia la publicación
    // - title: el título de la publicación
    // - body: el contenido de la publicación
    body: JSON.stringify(
        {
        userId: 3,
        title: "Arquitectura empleada en el cliente-servidor",
        body: "Modelo de comunicación y cambio de información en aplicaciones web."
        }
    ),
    // 4. Definimos los encabezados para indicar que el contenido es JSON
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    // 5. Convertimos la respuesta del servidor a formato JSON
    .then((response) => response.json())
    // 6. Mostramos en consola el objeto que devuelve el servidor
    // Normalmente incluye el nuevo recurso con su id asignado
    .then((json) => console.log(json));
}

// // 7. Ejecutamos la función para crear la publicación
// crearPublicacionUsuarioExistente()

// ------------------------------------------------------------------------------------------------------------
// Solicitud 5: Realice una solicitud POST para registrar un nuevo comentario relacionado con
// una publicación.

// Definimos una función llamada "crearNuevoComentario"
const crearNuevoComentario = () => {
    // 1. Usamos fetch para hacer una solicitud HTTP al servidor en la ruta /comments
    fetch('http://localhost:3000/comments', {
    // 2. Indicamos que el método de la solicitud es POST (crear un recurso nuevo)
    method: 'POST',
    // 3. Enviamos el cuerpo de la solicitud en formato JSON
    // Aquí definimos los datos del nuevo comentario:
    // - postId: el id de la publicación a la que se asocia el comentario
    // - name: el nombre del comentario
    // - body: el contenido del comentario
    body: JSON.stringify(
        {
        postId: 3,
        name: "Comentario 4",
        body: "Buen ejemplo de arquitectura usando fetch y el metodo POST."
        }
    ),
    // 4. Definimos los encabezados para indicar que el contenido es JSON
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    // 5. Convertimos la respuesta del servidor a formato JSON
    .then((response) => response.json())
    // 6. Mostramos en consola el objeto que devuelve el servidor
    // Normalmente incluye el nuevo comentario con su id asignado
    .then((json) => console.log(json));
}

// // 7. Ejecutamos la función para crear el comentario
// crearNuevoComentario()

// ==================================================================================================================
// Parte 3: Actualización de información (PUT y PATCH)
// ==================================================================================================================

// Solicitud 6: Realice una solicitud PUT para actualizar completamente la información de una
// publicación existente.

// Definimos una función llamada "actualizarPut"
const actualizarPut = () => {
    // 1. Usamos fetch para hacer una solicitud HTTP al servidor en la ruta /posts/5
    // Aquí indicamos el recurso específico (la publicación con id = 5)
    fetch('http://localhost:3000/posts/5', {
    // 2. Indicamos que el método de la solicitud es PUT
    // PUT reemplaza completamente la información del recurso existente
    method: 'PUT',
    // 3. Enviamos el cuerpo de la solicitud en formato JSON
    // Incluimos todos los campos de la publicación:
    // - id: identificador de la publicación
    // - userId: usuario asociado
    // - title: título actualizado
    // - body: contenido actualizado
    body: JSON.stringify(
        {
        id: "5",
        userId: 5,
        title: "Método POST actualizado",
        body: "Creación de recursos mediante POST (Actualizado)."
        }
    ),
    // 4. Definimos los encabezados para indicar que el contenido es JSON
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    // 5. Convertimos la respuesta del servidor a formato JSON
    .then((response) => response.json())
    // 6. Mostramos en consola el objeto que devuelve el servidor
    // Normalmente incluye la publicación ya actualizada
    .then((json) => console.log(json));
}

// 7. Ejecutamos la función para actualizar la publicación
// actualizarPut()

// ----------------------------------------------------------------------------------------------------------
// Solicitud 7: Realice una solicitud PATCH para modificar únicamente un campo específico
// de esa publicación.

// Definimos una función llamada "actualizarPatch"
const actualizarPatch = () => {
    // 1. Usamos fetch para hacer una solicitud HTTP al servidor en la ruta /posts/10
    // Aquí indicamos el recurso específico (la publicación con id = 10)
    fetch('http://localhost:3000/posts/10', {
    // 2. Indicamos que el método de la solicitud es PATCH
    // PATCH se utiliza para modificar parcialmente un recurso,
    // es decir, actualizar solo algunos campos sin reemplazar todo el objeto.
    method: 'PATCH',
    // 3. Enviamos el cuerpo de la solicitud en formato JSON
    // En este caso, solo actualizamos el campo "title" de la publicación.
    body: JSON.stringify(
        {
        title: 'Ejercicio prático',
        }
    ),
    // 4. Definimos los encabezados para indicar que el contenido es JSON
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    // 5. Convertimos la respuesta del servidor a formato JSON
    .then((response) => response.json())
    // 6. Mostramos en consola el objeto que devuelve el servidor 
    // Normalmente incluye la publicación con el campo actualizado.
    .then((json) => console.log(json));
}

// 7. Ejecutamos la función para aplicar la actualización parcial
// actualizarPatch()

// ==================================================================================================================
// Parte 4: Eliminación de información (DELETE)
// ==================================================================================================================

// Solicitud 8: Realice una solicitud DELETE para eliminar una publicación existente.

// Definimos una función llamada "eliminar" que recibe como parámetro el id de la publicación
const eliminar = (id) => {
    // 1. Usamos fetch para hacer una solicitud HTTP al servidor en la ruta /posts/:id
    // Aquí indicamos el recurso específico (la publicación con el id que pasamos como argumento).
    fetch(`http://localhost:3000/posts/${id}`, {
    // 2. Indicamos que el método de la solicitud es DELETE
    // DELETE se utiliza para eliminar un recurso existente en el servidor.
    method: 'DELETE',
});
}

// 3. Ejecutamos la función "eliminar" pasando el id de la publicación que queremos borrar.
// En este caso, se intenta eliminar la publicación con id = 8.
eliminar('8')

// ==================================================================================================================
// Parte 5: Análisis y verificación de respuestas
// ==================================================================================================================

// Solicitud 9: Repita una solicitud GET sobre el recurso eliminado o modificado y analice la
// respuesta obtenida.
const consultarPublicacion = (id) => {
    fetch(`http://localhost:3000/posts/${id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
};

// consultarPublicacion(8);

// Solicitud 10: Realice una solicitud GET general y compare la estructura de la respuesta con
// las solicitudes anteriores, identificando cambios y comportamientos del servicio.
const obtenerPublicaciones = () => {
    fetch('http://localhost:3000/posts', {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
};

// obtenerPublicaciones();