//creamos una funcion
function actualizarPerfil(perfil, ...nuevosDatos){
    //usamos spread para combinar el perfil original con todos los ojetos de nuevosDatos

    const perfilActualizado = {nombre:"Dayana", edad:18, ciudad:"lebrija"};

    //luego actualizamos con varios objetos parciales
    const perfilFinal = actualizarPerfil(perfil,{edad:22}, {cuidad:"Bucaramanga"}, {profesion:"Tecnologa en software"});
    //imprimimos 
    console.log("Perfil original:", perfil);
    console.log("Perfil actualizado", perfilFinal);

}