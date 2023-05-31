/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */
function iniciarJuego() {

    // suludamos al usuario
    alert("Bienvenido al piedra papel o tijera de Frontend II.");
    // guardamos en una variable en nombre ingresado
    const nombre = prompt("Ingese su nombre por favor:")

    alert("Gracias por jugar " + nombre + ". ¡Mucha suerte!");

    // mostramos los datos por consola
    console.log("----------------------------");
    console.log("El jugador es:")
    console.log(nombre);
    console.log("----------------------------");

    return nombre;
}

// creamos una variable a nivel global para guardar el nombre del jugador que nos devuelve la función
const nombreJugador = iniciarJuego();

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.


function iniciarJuego() {

    // saludamos al usuario
    alert("Bienvenido al piedra papel o tijera de Frontend II.");

    // guardamos en una variable en nombre ingresado
     let nombre = "";

     do{
        nombre = prompt ("Ingrese su nombre por favor:");
     } while (nombre != String || nombre.trim().length < 3);

     //convertimos el nombre a mayusculas

     nombre = nombre.toUpperCase();


     alert("Bienvenido al piedra papel o tijera de Frontend II." + nombre + ".¡Mucha suerte!");

    // mostramos los datos por consola
    console.log("----------------------------");
    console.log("El jugador es:")
    console.log(nombre);
    console.log("----------------------------");

    return nombre;
}

