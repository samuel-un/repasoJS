/* Ejercicio 21: 
21.1 Agregar al Final
Dado un array de números, utiliza el método push() para agregar dos números al final del array. Luego, imprime el array resultante.
const numbers = [1, 2, 3]
21.2 Eliminar Último Elemento
Dado un array de colores, utiliza el método pop() para eliminar el último color del array y mostrarlo en la consola. Luego, imprime el array resultante.
const colors = ['red', 'green', 'blue']
21.3 Agregar al Principio
Dado un array de frutas, utiliza el método unshift() para agregar dos frutas al principio del array. Luego, imprime el array resultante.
const fruits = ['apple', 'banana', 'orange']
21.4 Eliminar Primer Elemento
Dado un array de animales, utiliza el método shift() para eliminar el primer animal del array y mostrarlo en la consola. Luego, imprime el array resultante.
const animals = ['dog', 'cat', 'rabbit']
21.5 Copia Superficial de Subarray
Dado un array de números, utiliza el método slice() para crear una copia superficial de una porción del array. Luego, imprime el subarray resultante.
const numbers = [1, 2, 3, 4, 5]
21.6 Dividir en Subcadenas
Dada una cadena de texto que contiene palabras separadas por espacios, utiliza el método split() para dividir la cadena en un array de palabras individuales. Luego, imprime el array resultante.
const sentence = 'Esta es una oración de ejemplo.' */

const numbers1 = [1, 2, 3];
numbers1.push(4, 5);
console.log(numbers1);

const colors = ['red', 'green', 'blue'];
colors.pop();
console.log(colors);

const fruits = ['apple', 'banana', 'orange'];
fruits.unshift('Pear', 'peach');
console.log(fruits);

const animals = ['dog', 'cat', 'rabbit'];
console.log(animals.shift());
console.log(animals);

const numbers2 = [1, 2, 3, 4, 5];
const subNumbers2 = numbers2.slice(0, 3);
console.log(subNumbers2);

const sentence = 'Esta es una oración de ejemplo.';
console.log(sentence.split(" "));
