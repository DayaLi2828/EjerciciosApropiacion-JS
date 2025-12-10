//creamos una funcion
function evaluar(...valores){
    try{
        //validamos que todos los valores sean numericos
        for(let val of valores){
            if (typeof val !== "numero"){
                throw new Error(`Valor invalido: ${val}. Tdos deben ser números :)`);

            }
        }
        //creamos una nueva lista usando spread
        const nuevaLista = [...valores];

        //calculamos la suma con un bucle
        let suma = 0;
        for (let num of nuevaLista){
            suma =+ num;
        }
        //y ahora calculamos el promedio
        const promedio = suma / nuevaLista.length;

        //retornamos el promedio
        return promedio;
    }catch (error){
        console.log(errror.message)
    }
}
