// ==================================================================================================================
// Parte 1: Solicitudes de consulta (GET)
// ==================================================================================================================

// Solicitud 2: Realice una solicitud GET para consultar la información de un usuario
// específico, utilizando su identificador.

// Definimos una función asíncrona llamada "solicitarUsuarioEspecifico"
export const solicitarUsuarioEspecifico = async () => {
    // 1. Realizamos la petición HTTP GET al servidor en la ruta /users/1 
    // Esto significa que estamos consultando el usuario con id = 1
    let pedido = await fetch('http://localhost:3000/users/1');
    // 2. Esperamos la respuesta y la convertimos a formato JSON
    // El servidor devuelve los datos del usuario en formato JSON
    let respuesta = await pedido.json();
    // 3. Retornamos la respuesta ya convertida en objeto de JavaScript
    return respuesta;
}