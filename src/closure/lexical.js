const funcionContador = (i)=>{
    let contador = i;
    const mostraContador = ()=>{
        console.log(contador++);
    }
    return mostraContador;
}

const miContador = funcionContador(1);
miContador();
miContador();
miContador();

const otroContador = funcionContador(10);
otroContador();
otroContador();