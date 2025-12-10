import PromptSync from "prompt-sync";
const actividad = {
  nombre: "Reunión de equipo",
  fecha: "2025-12-11"
};
//creamos una funcion
function registrarActividad(actividad){
  try {
    const { nombre, fecha } = actividad;
        if(!nombre || !fecha){
            throw new Error("La actividad no es válida")
        }
        //si esta correcto
        console.log(`Actividad registrada: ${actividad.nombre}`)
    } catch (error){
        //capturamos el error y lo mostramos
        console.log(error.message)
    }
}
const entrada = PromptSync;
const nombre = entrada("Ingrese su nombre:")

registrarActividad({ nombre, fecha });