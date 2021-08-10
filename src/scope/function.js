// La variable declarada dentro de una funcion pertenece a su local scope y solo tiene alcance dentro de ella
const frutas = ()=>{
 var fruta = "apple";
 console.log(fruta);
}

frutas();
console.log(fruta);

// La paralabra reservada var permite reasignar el valor de la misma variable, es recomendado dejar de usar var y utilizar let y const
const otraFuncion = ()=>{
    var x= 1;
    var x= 2;
    let y= 1;
    // let y= 2;
    console.log(x);
    console.log(y);
}
otraFuncion();