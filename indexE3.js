
// 3)	Arrays
//a)	Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)

var ok=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(ok[4] + ' ' + ok [10]);

//b)	 Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log(ok.sort());

//c)	Agregar un elemento al principio y al final del array (utilizar unshift y push).

var okAdelante=ok.push(["OKadelante"]);
var okAtras=ok.unshift(["OKatras"]);

console.log(okAtras);

//d)	Quitar un elemento del principio y del final del array (utilizar shift y pop).

var okAdelantes= ok.shift();
var okAtra= ok.pop();

console.log(ok);

//e)	Invertir el orden del array (utilizar reverse)

var revertir= ok.reverse();

console.log(revertir);

//f)	Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

var unite= ok.join('-');

console.log(unite);

//g)	Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

var mayoNoviembre= ok.slice(5,11);

console.log(mayoNoviembre);