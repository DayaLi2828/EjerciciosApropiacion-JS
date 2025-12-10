//definimos una funcion
function procesarPedidos(pedido, ...extras){
    //destructuracion del objeto pedido
    const {cliente, producto, cantidad} = pedido;
    //pasamos a retornar un objeto
    return{cliente, producto, cantidad, extras}//aca se van a guardar todos los extras en un array

    const pedido1 ={cliente: "Dayana", producto:"Fertilizante", cantidad:3};

    //añadimos las extras
    const resultado = procesarPedidos(pedido1, "Entrega urgente", "Pago en efectivo", "Entrega inmediata", "Entrega a domicilio");

    //imprimimos por consola
    console.log(resultado);
}