// La variable creada dentro de una funcion o bloque solo vive dentro de ella, de esta forma se le conoce como Scope Local
const helloWorld = ()=>{
    const hello = "hello World";
    console.log(hello);
}

helloWorld();
console.log(hello);

// AMBITO LEXICO si una variable con el mismo nombre de una global es asginada dentro de una funcion, esta no es reasiganda, sino que se crea solo dentro de la funcion, por lo que al ejecutar la funcion y al impirmir la variable local son dos distintas.

var scope = "soy una variable global";

const functionScope = () => {
    var scope = "soy asignado a local";

    const funcion = () => scope; 
    console.log(funcion());
}

functionScope();
console.log(scope);