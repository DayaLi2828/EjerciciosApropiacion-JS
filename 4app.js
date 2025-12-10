//creamos un objeto inmodificable
const defaults = {tema:"claro", idioma:"es"};
//objeto personalizado
const personalizadas = {tema:"oscuro", idioma:"en"};
//creamos una funcion
function configurarUsuario(defaults, personalizadas){
    //usamos spread para combinar sin mutar
    //aqui se crea un nuevo objeto, pero automaticamente con spread
    const configuracioFinal ={...defaults, ...personalizadas};

    //usamos destructuracion para obtener el idioma
    const {idioma} = configuracioFinal;

    //y retornamos el idioma resultante
    return idioma;

    //imprimimos
    console.log(configurarUsuario(defaults, personalizadas));// "en"
}