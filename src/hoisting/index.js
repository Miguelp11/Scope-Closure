a=2;
var a=2;
console.log(a); //2

// Javascript utiliza el hoisting en las declaraciones y no en las inicializaciones
console.log(a);
var a=2;

// hoisting en una funcion
nombrePerro("dumbo");
function nombrePerro (nombre){
    console.log(nombre);
}