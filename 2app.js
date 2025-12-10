//partiendo del arreglo inicial
const inventario =["camara", "tripode", "microfono"];

//creamos una funcion
function agregarInventario (lista, nuevoItem){
    //creamos una nueva lista usando spread
    let nuevaLista = [...lista, nuevoItem];

    //imprimimos el mensaje con la cantidad de items
    console.log(`El inventario ahora tiene ${nuevaLista.length} ítems.`)
}