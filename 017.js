/* Ejercicio 17: Closures
Crea una función llamada contadorClosures que retorne 
otra función. Esta función interna debe mantener un contador 
interno y cada vez que se llame, incrementa el contador y lo devuelve. 
Utiliza closures para lograr esto. */

function contadorClosures(){
    let contador = 0;
    return function (){
        contador++;
        return contador;
    };
}

const contador1 = contadorClosures();
console.log(contador1()); // 1
console.log(contador1()); // 2
console.log(contador1()); // 3

const contador2 = contadorClosures();
console.log(contador2()); // 1

