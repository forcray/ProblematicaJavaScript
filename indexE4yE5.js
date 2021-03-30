
//4)	If Else
//a)	Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”

let ea = Math.random();
console.log(ea);

if (ea >= 0.5) alert("Mas 0,5");
else alert("Menos 0,5");

/*
b)	Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:

i)	“Bebe” si la edad es menor a 2 años
ii)	“Nino” si la edad es entre 2 y 12 años
iii)“Adolecente” si la edad es entre 13 y 19 años
iv)	“Joven” si la edad está entre 20 y 30 años
v)	“Adulto” entre 31 y 60 años
vi)	“Adulto mayor” entre 61 y 75 años
vii)“Anciano” si es mayor a 75 años

*/

let age = 23;
if (age < 2) alert("Bebe");
else if (age >= 2 && age < 13) alert("Niño");
else if (age >= 13 && age < 20) alert("Adolecente");
else if (age >= 20 && age < 31) alert("Joven");
else if (age >= 31 && age < 61) alert("Adulto");
else if (age >= 61 && age < 76) alert("Adulto mayor");
else alert("Anciano");

//5)	For
//a)	Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
var cincoPalabras = ['pascuas','jesus','maria','judas','pedro'];
for(var si = 0; si < 6; si++) {
    alert(cincoPalabras[si]);

}
//b)	Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.

for (si = 0; si < 5; si++) {    
    alert(cincoPalabras[si][0].toUpperCase() + cincoPalabras[si].substring(1,cincoPalabras[si].length));
}

//c)	Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.

var sentencia = '';
for (si = 0; si < 5; si++) {
    sentencia += cincoPalabras[si];
}
alert(sentencia);


//d)	Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el número 0 hasta al numero 9. Mostrar por la consola del navegador el al array final (utilizar console.log).

var array=[];
for (si = 0; si < 10; si++) {
    array.push(si);
}
console.log(array); 