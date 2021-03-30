/* 

1)	Variables y Operadores
a)	Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.
b)	Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
c)	Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado la suma una 3er variable (utilizar length).

*/
//a
console.log ('Executing external script made with JS')

var x, y;
x = 11;
y = 4;
var resultado = x + y;

console.log('Resultado de la suma de los dos:' + resultado);

//b y c

var cholo, enzo;
var cholo = '-hola que hace como anda ';
var enzo = '-hola si todo piola';
var joined = cholo + enzo;
var cantidadLetras;
joined;

console.log(cholo,enzo)
console.log('conversacion rioba:' + joined);
console.log('Cantidad de letras es: ' + joined.length + ' muchas letras ¿no te parece?');

/* 2)	Strings
a)	Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).*/

var nano = "Mariano Ariel";
var mayuscula = nano.toUpperCase;

console.log(mayuscula)

/*b)	Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

var holaManola = 'Hola mano la';
var CincoCaracteres = holaManola.substring(0,5);
console.log(CincoCaracteres);

/*c)	Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

var TresCaracteres = holaManola.substring(8,3);
console.log(TresCaracteres);

/*d)	Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/

var primeraMayuscula = holaManola.substring(0,1).toUpperCase() + holaManola.substring(1,10).toLowerCase();
console.log(primeraMayuscula);

/*e)	Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

var espacioBlanco =  holaManola.indexOf(" ");
console.log(espacioBlanco);

/*f)	Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

var dosPalabras, ejercicioF ;
dosPalabras ='zoologicos maniaticos'; 
ejercicioF = dosPalabras.substring(0,1).toUpperCase() + dosPalabras.substring(1, 10).toLowerCase() + dosPalabras.substring(dosPalabras.indexOf(" "), dosPalabras.indexOf("l")) + dosPalabras.substring(11,12).toUpperCase() + dosPalabras.substring(12, 21).toLowerCase();
console.log(ejercicioF);
