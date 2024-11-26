/*  Ejercicio 2: Operadores y Condicionales
1. Declara una variable puntuacion y asígnale un valor entre 0 y 100 para representar una calificación.
2. Utiliza un condicional if para verificar si la puntuacion es mayor o igual a 70. Si es verdadero, muestra en la consola "Aprobado", de lo contrario, muestra "Reprobado".
3. Declara una variable dia y asígnale un número del 1 al 7 para representar un día de la semana (1: Lunes, 2: Martes, ..., 7: Domingo).
4. Utiliza una estructura switch para mostrar en la consola el nombre del día correspondiente al número asignado a dia.
5. Crea una función llamada convertirFahrenheit que tome la temperatura en grados Celsius como argumento y devuelva la temperatura equivalente en grados Fahrenheit utilizando la fórmula: (C × 9/5) + 32.
6. Utiliza la función convertirFahrenheit para mostrar la temperatura en grados Fahrenheit en la consola.
7. Crea una funcion llamada esPar que tome un numero como argumento y devuelva true o false si el numero es par. Puedes utilizar el operador modulo % para ver si tiene resto la operación y saber si es par o no.
8. Utiliza la función esPar */

let puntuacion = 88;

puntuacion >= 70 ? console.log("Aprobado") : console.log("Reprobado");

let dia = 6;

switch (dia) {
	case 1:
		console.log(dia + ". Lunes");
		break;
	case 2:
		console.log(dia + ". Martes");
		break;
	case 3:
		console.log(dia + ". Miercoles");
		break;
	case 4:
		console.log(dia + ". Jueves");
		break;
	case 5:
		console.log(dia + ". Viernes");
		break;
	case 6:
		console.log(dia + ". Sábado");
		break;
	case 7:
		console.log(dia + ". Domingo");
		break;
}

function convertirFahrenheit(gradosCelsius) {
	return (gradosCelsius * 9) / 5 + 32;
}

console.log(convertirFahrenheit(22));

function esPar(num){
    return num % 2 == 0 ? true :  false;
}

console.log(esPar(11));