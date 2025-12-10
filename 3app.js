//creamos una funcion
function registrarActividad(actividad){
    try{
        if(!actividad.nombre || !actividad.fecha){
            throw new Error("La actividad no es válida")
        }
        //si esta correcto
        console.log(`Actividad registrada: ${actividad.nombre}`)
    } catch (error){
        //capturamos el error y lo mostramos
        console.log(error.message)
    }


}