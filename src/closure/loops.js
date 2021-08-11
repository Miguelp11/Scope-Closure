// Con la palabra reservada var se crea una clausula en el cual conserva el contexto dentro de la misma clausula conservando el ultimo valor la variable y repitiendola por las veces indicada en el for, al usar LET el scope es de bloque por lo cual se rompe la cluausula
const otraFuncion = ()=>{
    for(var i=0; i<10; i++ ){
        setTimeout(()=>{
            console.log(i);
        }, 1000)
    }
}
otraFuncion();