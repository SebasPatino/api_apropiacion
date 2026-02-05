// ==================================================================================================================
// Parte 1: Solicitudes de consulta (GET)
// ==================================================================================================================

// Solicitud 1: Realice una solicitud GET para obtener la lista completa de usuarios disponibles
// en el servicio.

// Definimos una función asíncrona llamada "solicitarUsuarios"
export const solicitarUsuarios = async () => {
    // 1. Realizamos la petición HTTP GET al servidor en la ruta /users
    let pedido = await fetch('http://localhost:3000/users/');
    // 2. Esperamos la respuesta y la convertimos a formato JSON
    let respuesta = await pedido.json();
    // 3. Retornamos la respuesta ya convertida en objeto/array de JavaScript
    return respuesta;
}