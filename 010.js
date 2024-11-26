/* Ejercicio 10: Bucle For...in
Crea un objeto con algunas propiedades y utiliza un bucle for...in para imprimir cada propiedad y su valor en la consola. */

const persona = {
    nombre: "Samuel",
    edad: 20,
    esEstudiante: true,
};

for (const propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
}