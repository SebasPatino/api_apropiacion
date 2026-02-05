// ==================================================================================================================
// Parte 1: Solicitudes de consulta (GET)
// ==================================================================================================================

// Solicitud 3: Realice una solicitud GET para obtener todas las publicaciones (posts)
// asociadas a un usuario determinado.

// Definimos una función asíncrona que recibe como parámetro el id del usuario
export const solicitarPostsUsuario = async (userId) => {
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