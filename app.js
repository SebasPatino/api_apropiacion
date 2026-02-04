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

// 4. Ejecutamos la función "solicitarUsuarios"
// Como devuelve una promesa, usamos .then() para manejar el resultado
solicitarUsuarios().then((data) => {
    // 5. Mostramos en consola la lista completa de usuarios obtenidos
    console.log(data);
    }
)

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

// 4. Ejecutamos la función "solicitarUsuarioEspecifico"
// Como devuelve una promesa, usamos .then() para manejar el resultado
solicitarUsuarioEspecifico().then((data) => {
    // 5. Mostramos en consola la información del usuario con id = 1
    console.log(data);
    }
)

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

// 4. Ejecutamos la función "solicitarPostsUsuario" pasando el id del usuario (2)
// Como devuelve una promesa, usamos .then() para manejar el resultado
solicitarPostsUsuario('2').then((data) => {
    // 5. Mostramos en consola las publicaciones asociadas al usuario con id = 2
    console.log(data);
    }
)

// ==================================================================================================================
// Parte 2: Solicitudes de consulta (GET)
// ==================================================================================================================

// Solicitud 4: Realice una solicitud POST para crear una nueva publicación asociada a un
// usuario existente.
// Incluya información como título y contenido.
const crearPublicacionUsuarioExistente = () => {
    fetch('http://localhost:3000/posts', {
    method: 'POST',
    body: JSON.stringify(
        {
        userId: 3,
        title: "Arquitectura empleada en el cliente-servidor",
        body: "Modelo de comunicación y cambio de información en aplicaciones web."
        }
    ),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
  .then((response) => response.json())
  .then((json) => console.log(json));
}

// crearPublicacionUsuarioExistente()

// Solicitud 5: Realice una solicitud POST para registrar un nuevo comentario relacionado con
// una publicación.
const crearNuevoComentario = () => {
    fetch('http://localhost:3000/comments', {
    method: 'POST',
    body: JSON.stringify(
        {
        postId: 3,
        name: "Comentario 4",
        body: "Buen ejemplo de arquitectura usando fetch y el metodo POST."
        }
    ),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// crearNuevoComentario()

// ==================================================================================================================
// Parte 3: Actualización de información (PUT y PATCH)
// ==================================================================================================================

// Solicitud 6: Realice una solicitud PUT para actualizar completamente la información de una
// publicación existente.
const actualizarPut = () => {
    fetch('http://localhost:3000/posts/5', {
    method: 'PUT',
    body: JSON.stringify(
        {
        id: "5",
        userId: 5,
        title: "Método POST actualizado",
        body: "Creación de recursos mediante POST (Actualizado)."
        }
    ),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// actualizarPut()

// Solicitud 7: Realice una solicitud PATCH para modificar únicamente un campo específico
// de esa publicación.
const actualizarPatch = () => {
    fetch('http://localhost:3000/posts/10', {
    method: 'PATCH',
    body: JSON.stringify(
        {
        title: 'Ejercicio prático',
        }
    ),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// actualizarPatch()

// ==================================================================================================================
// Parte 4: Eliminación de información (DELETE)
// ==================================================================================================================

// Solicitud 8: Realice una solicitud DELETE para eliminar una publicación existente.
const eliminar = (id) => {
    fetch(`http://localhost:3000/posts/${id}`, {
    method: 'DELETE',
});
}

// eliminar('8')

// ==================================================================================================================
// Parte 5: Eliminación de información (DELETE)
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