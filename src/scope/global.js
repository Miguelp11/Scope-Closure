// Var nos permite reasignar una misma variable lo cual es una MALA PRACTICA, al intentar realizar esto con let o const nos arrojara un error
var hola = "hola";
var hola = "hola de nuevo"

let world = "Hello world";
const helloWorld = "hello World"; 

const otraFuncion = ()=>{
    console.log(hola);
    console.log(world);
    console.log(helloWorld);
}
otraFuncion();

// Si se crea una variable sin las palabras reservadas var, const o let dentro de una funcion esta actuara como una variable global MALA PRACTICA
const otraFuncion1 = ()=>{
    globalVar = "Soy una variable global";
}

otraFuncion1();
console.log(globalVar);

// Si se realiza una doble asignacion de variables se crea una variable global, lo cual es una MALA PRACTICA
const otraFuncion2 = ()=>{
    var localVar= globalVar1 = "Soy una variable global";
}
otraFuncion2();
console.log(globalVar1);