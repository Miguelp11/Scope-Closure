// La variable definida con var tiene su ambito de funcion, por lo que existe dentro de toda la funcion, y mientras tanto let y const su ambito es de bloque
const frutas = ()=>{
    if(true){
        var fruta1= "apple";
        let fruta2= "banana";
        const fruta3 = "kiwi";
        console.log(fruta2);
        console.log(fruta3);
    }
    console.log(fruta1);
}
frutas();

// Al utilizar la palabra reservada var, la variable global se reasigna por la variable dentro del bloque, cosa que con let no pasa , porque cada una tiene su propio scope
var x=1;
{
    var x=2;
    console.log(x);
}
console.log(x);

// Con var la variable accede al ultimo valor del recorrido del for, para solucionar esto, en lugar de declarar var, se declara con let
const otraFuncion = ()=>{
    for(var i=0; i<10; i++ ){
        setTimeout(()=>{
            console.log(i);
        }, 1000)
    }
}
otraFuncion();