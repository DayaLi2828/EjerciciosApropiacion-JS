//creamos una funcion
function fusionarColecciones(lista1, lista2){
    try{
        //validamos que ambas sean arreglos
        if (!Array.isArray(lista1) || !Array.isArray(lista2));{
        throw new Error("Ambas colecciones deben ser arregllos");
        }

        //fusionamos con spread sin mutar la original
        const coleccionFinal = [...lista1, ...lista2];

        return coleccionFinal;
    }catch (error){
        console.log(error.message)
    }
    

}