const moneyBox = (coins)=>{
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`Alcancia: $${saveCoins}`);
}

moneyBox(5);
moneyBox(10);

// Creando un closure = funcion interna + scope -> el return de la funcion interna con su scope es el CLOSURE
const alcancia = ()=>{
    var guardarMonedas =0;

    const contarMonedas = (monedas) =>{
        guardarMonedas += monedas;
        console.log(`Alcancia: $${guardarMonedas}`);
    }
    return contarMonedas;
}

let miAlcancia = alcancia();
miAlcancia(5);
miAlcancia(6);
miAlcancia(10);