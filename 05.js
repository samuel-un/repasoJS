/* Ejercicio 5: Declaración Switch
1. Crea una variable mes y asígnale un número del 1 al 12 para representar un mes del año.
2. Utiliza una declaración switch para mostrar en la consola la estación del año correspondiente al mes asignado.
3. Crea una función llamada calcularDiasMes que tome un número mes como argumento y devuelva la cantidad de días que tiene ese mes. Utiliza una declaración switch para calcular los días de cada mes.
4. Utiliza la función calcularDiasMes para mostrar en la consola la cantidad de días de un mes específico. */

let mes = 8;

switch (mes) {
	case 1:
		console.log(mes + ". Enero");
		break;
	case 2:
		console.log(mes + ". Febrero");
		break;
	case 3:
		console.log(mes + ". Marzo");
		break;
	case 4:
		console.log(mes + ". Abril");
		break;
	case 5:
		console.log(mes + ". Mayo");
		break;
	case 6:
		console.log(mes + ". Junio");
		break;
	case 7:
		console.log(mes + ". Julio");
		break;
	case 8:
		console.log(mes + ". Agosto");
		break;
	case 9:
		console.log(mes + ". Septiembre");
		break;
	case 10:
		console.log(mes + ". Octubre");
		break;
	case 11:
		console.log(mes + ". Noviembre");
		break;
	case 12:
		console.log(mes + ". Diciembre");
		break;
}

function calcularDiasMes(mes) {
	switch (mes) {
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			return 31;
		case 4:
		case 6:
		case 9:
		case 11:
			return 30;
		case 2:
			return 28;
		default:
			return 0;
	}
}

console.log(calcularDiasMes(mes));