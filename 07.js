/* Ejercicio 7: Bucle Do...While
Utiliza un bucle do...while para pedir al usuario que ingrese un número positivo. 
Continúa pidiendo hasta que ingrese un número positivo.
Ejecutar ejercicio en consola navegador para poder usar prompt. */

let num = 10;
let cont = 0;

do {
	console.log("Simulamos que el usuario introduce " + num);


    cont++;
	if (cont === 10) {
		console.log("Límite de intentos alcanzado.");
		break; // Salir del bucle después de 10 intentos para que no se quede en bucle
	}
} while (num <= 0);
