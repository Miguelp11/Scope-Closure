var a = "Hola";

function hello(){
    let b = "hola mundo";
    const c = "Hola mundo!";
    if(true){
        let d = "Hola Mundo !!";
        debugger
    }
}

hello();

// Otro debug
const alcancia = ()=>{
    debugger
    var guardarMonedas =0;
    const contarMonedas = (monedas) =>{
        debugger
        guardarMonedas += monedas;
        console.log(`Alcancia: $${guardarMonedas}`);
    }
    return contarMonedas;
}

let miAlcancia = alcancia();
miAlcancia(5);
miAlcancia(6);
miAlcancia(10);