// ============================================================================
// Archivo principal: app.js
// ============================================================================

// 1. Importamos la librería prompt-sync, que nos permite pedir datos al usuario
//    directamente desde la consola de manera sencilla.
import promptSync from 'prompt-sync';

// 2. Importamos nuestras funciones desde el barril (index.js).
//    Estas funciones están modularizadas en archivos separados dentro de /services.
import { 
    solicitarUsuarios, 
    solicitarUsuarioEspecifico, 
    solicitarPostsUsuario,
    crearPublicacionUsuarioExistente,
    crearNuevoComentario,
    actualizarPut,
    actualizarPatch,
    eliminar,
    consultarPublicacion,
    obtenerPublicaciones
} from './modulos/index.js';

// 3. Inicializamos prompt-sync. El parámetro { sigint: true } permite
//    que el usuario pueda salir con Ctrl+C sin problemas.
const prompt = promptSync({ sigint: true });

// 4. Creamos una función para mostrar el menú en consola.
//    Este menú le da al usuario las opciones disponibles.
const mostrarMenu = () => {
    console.log("\n=== MENÚ DE SOLICITUDES ===");
    console.log("1. Solicitud 1: Obtener lista completa de usuarios");
    console.log("2. Solicitud 2: Obtener información de un usuario específico");
    console.log("3. Solicitud 3: Obtener publicaciones de un usuario");
    console.log("4. Solicitud 4: Crear una nueva publicación");
    console.log("5. Solicitud 5: Crear un nuevo comentario");
    console.log("6. Solicitud 6: Actualizar una publicación (PUT)");
    console.log("7. Solicitud 7: Actualizar parcialmente una publicación (PATCH)");
    console.log("8. Solicitud 8: Eliminar una publicación (DELETE)");
    console.log("9. Solicitud 9: Consultar una publicación (GET tras eliminación/modificación)");
    console.log("10. Solicitud 10: Obtener todas las publicaciones (GET general)");
    console.log("0. Salir");
};

// 5. Creamos la función principal que ejecutará el programa.
//    Usamos un bucle do...while para que el menú se repita hasta que el usuario elija salir.
const ejecutar = async () => {
    let opcion; // variable para guardar la opción elegida
    do {
        // Mostramos el menú en cada ciclo
        mostrarMenu();

        // Pedimos al usuario que ingrese una opción
        opcion = prompt("Seleccione una opción: ");

        // Evaluamos la opción con un switch
        switch(opcion) {
            case '1':
                // Caso 1: obtener todos los usuarios
                const usuarios = await solicitarUsuarios();
                console.log("\nLista de usuarios:", usuarios);
                break;

            case '2':
                // Caso 2: obtener un usuario específico
                const usuario = await solicitarUsuarioEspecifico(1);
                console.log(`\nUsuario con ID 1:`, usuario);
                break;

            case '3':
                // Caso 3: obtener posts de un usuario
                const idPosts = prompt("Ingrese el ID del usuario: ");
                const posts = await solicitarPostsUsuario(idPosts);
                console.log(`\nPosts del usuario con ID ${idPosts}:`, posts);
                break;
            
            case '4':
                // Caso 4: crear una nueva publicación
                const userId = prompt("Ingrese el ID del usuario: "); 
                const title = prompt("Ingrese el título de la publicación: "); 
                const body = prompt("Ingrese el contenido de la publicación: "); 
                const nuevaPublicacion = await crearPublicacionUsuarioExistente(userId, title, body); 
                console.log("\nPublicación creada:", nuevaPublicacion); 
                break;

            case '5': 
                // Caso 5: crear un nuevo comentario
                const postId = prompt("Ingrese el ID de la publicación: "); 
                const name = prompt("Ingrese el nombre del comentario: "); 
                const bodyCom = prompt("Ingrese el contenido del comentario: "); 
                const nuevoComentario = await crearNuevoComentario(postId, name, bodyCom); 
                console.log("\nComentario creado:", nuevoComentario); 
                break;

            case '6': 
                // Caso 6: actualizar una publicación completamente
                const id = prompt("Ingrese el ID de la publicación a actualizar: "); 
                const userIdPut = prompt("Ingrese el ID del usuario asociado: "); 
                const titlePut = prompt("Ingrese el nuevo título: "); 
                const bodyPut = prompt("Ingrese el nuevo contenido: "); 
                const publicacionActualizada = await actualizarPut(id, userIdPut, titlePut, bodyPut); 
                console.log("\nPublicación actualizada:", publicacionActualizada); 
                break;

            case '7': 
                // Caso 7: actualizar parcialmente una publicación
                const idPatch = prompt("Ingrese el ID de la publicación a modificar: "); 
                const campo = prompt("Ingrese el nombre del campo a actualizar (ej: title, body): "); 
                const valor = prompt("Ingrese el nuevo valor para ese campo: "); 
                const publicacionParcial = await actualizarPatch(idPatch, campo, valor); 
                console.log("\nPublicación modificada parcialmente:", publicacionParcial); 
                break;

            case '8': 
                // Caso 8: eliminar una publicación
                const idDelete = prompt("Ingrese el ID de la publicación a eliminar: "); 
                const resultado = await eliminar(idDelete); 
                console.log(`\nPublicación con ID ${idDelete} eliminada. Respuesta del servidor:`, resultado); 
                break;

            case '9':
                // Caso 9: consultar una publicación para verificar si fue eliminada o modificada
                const idConsulta = prompt("Ingrese el ID de la publicación a consultar: ");
                const consulta = await consultarPublicacion(idConsulta); 
                console.log("\nResultado de la consulta:", consulta);
                break;

            case '10':
                // Caso 10: obtener todas las publicaciones 
                const publicaciones = await obtenerPublicaciones(); 
                console.log("\n📚 Todas las publicaciones:", publicaciones); 
                break;

            case '0':
                // Caso 0: salir del programa
                console.log("Saliendo del programa...");
                break;

            default:
                // Si el usuario ingresa algo inválido
                console.log("Opción inválida. Intente de nuevo.");
        }

        // El bucle se repetirá mientras la opción no sea '0'
    } while(opcion !== '0');
};

// 6. Ejecutamos la función principal
ejecutar();