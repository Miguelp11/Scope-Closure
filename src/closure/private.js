const persona = ()=>{
    var guardarNombre = "nombre";
    return {
        getName: ()=>{
            return guardarNombre;
        },
        setName: (nombre)=>{
            guardarNombre = nombre;
        }
    }
}

newPersona = persona();
console.log(newPersona.getName());
newPersona.setName("miguel");
console.log(newPersona.getName());
