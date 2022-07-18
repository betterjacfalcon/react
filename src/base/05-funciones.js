const saludar = function (nombre){
    return `Hola  ${nombre}`;
}

const saludar2 = (nombre) =>{
    return `Hola  ${nombre}`;
}

const saludar3 = (nombre) =>`Hola  ${nombre}`;
const saludar4 = ( ) =>`Hola Mundo`;


console.log(saludar('fernando'));
console.log(saludar2('alejandra'));
console.log(saludar3('miriam'));
console.log(saludar4('miriam'));

const getUser = ( ) =>
     ({
        uid : 'ABCEDFG',
        username : 'el pape1502'
    })

function getUsuarioActivo  (nombre) {
     
    return{
        uid : '23tttttt',
        username : nombre
    }
}
const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo); 

console.log(getUser( ));
