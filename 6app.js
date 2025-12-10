//creamos un arreglo
const ventas = [
    {producto:"teclado", detalles:{precio:50,unidades:3}},
{producto:"mouse", detalles:{precio:20, unidades:5}}
];
//luego creamos una funcion
function calcularTotalPrimerProducto(ventas){
    //destructuracion, accedemos directamente a precio y unidades del primer objeto
    const [{detalles:{precio, unidades}}] = ventas;

    console.log(`Total vendido del primer producto:`, total);

    //por ultimo retornamos el total vendido
    return precio*unidades;
}