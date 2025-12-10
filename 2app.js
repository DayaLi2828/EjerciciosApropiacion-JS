//partiendo del arreglo inicial
const inventario =["camara", "tripode", "microfono"];

//creamos una funcion
function agregarInventario (lista, ...nuevoItem){
    //creamos una nueva lista usando spread
    let nuevaLista = [...lista, ...nuevoItem];

    //imprimimos el mensaje con la cantidad de items
    return `El inventario ahora tiene ${nuevaLista.length} ítems, \nlos cuales son: \n${nuevaLista}.`
}

resultado = agregarInventario(inventario, "Steamdek", "Teclado Gamer", "Monitor")
console.log(resultado)