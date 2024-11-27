/* Ejercicio 22: 
22.1 Filtrar Números Pares
Dado un array de números, utiliza el método filter() para crear un nuevo array que contenga solo los números pares. Luego, imprime el nuevo array resultante.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
22.2 Combinar Arrays
Dados dos arrays de números, utiliza el método concat() para combinarlos en un nuevo array. Luego, imprime el nuevo array resultante.
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
22.3 Ejecutar para Cada Elemento
Dado un array de números, utiliza el método forEach() para ejecutar una función que multiplica cada número por 2. Luego, muestra los resultados en la consola.
const numbers = [1, 2, 3, 4, 5]
22.4 Crear Nuevo Array con map()
Dado un array de números, utiliza el método map() para crear un nuevo array que contenga el cuadrado de cada número. Luego, imprime el nuevo array resultante.
const numbers = [1, 2, 3, 4, 5]
22.5 Crear Nuevo Array con filter()
Dado un array de números, utiliza el método filter() para crear un nuevo array que contenga solo los números pares. Luego, imprime el nuevo array resultante.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
22.6 Reducir a un Solo Valor
Dado un array de números, utiliza el método reduce() para sumar todos los números y obtener un valor total. Luego, imprime el valor total.
const numbers = [1, 2, 3, 4, 5] */

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8];
const numbers1Pares = numbers1.filter((numero) => numero % 2 == 0);
console.log(numbers1Pares);

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2);
console.log(array3);

const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach((number) => {
	console.log(number * 2);
});

const numbers3 = [1, 2, 3, 4, 5];
const numbersCuadrados = numbers3.map(number => number ** 2);
console.log(numbersCuadrados);

const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8];
const numbers4Pares = numbers4.filter((numero) => numero % 2 == 0);
console.log(numbers4Pares);

const numbers5 = [1, 2, 3, 4, 5];
const total = numbers5.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(total);
