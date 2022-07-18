const sobrinos = ['Sergio', 'Alessandra', 'Alejandro'];
const [p1, p2, p3 ] = sobrinos;

console.log(`${p1} ${p2} ${p3}` );

const retornaArreglo = ( ) => {
    return ['ABC', 'DFE'];

}

const [a1, a2 ] = retornaArreglo();

console.log(`${a1} ${a2} ` );

const userState = (valor) => {

    return [ valor, ()=> {console.log(`hola mundo` ) }];

}
const [nombre, setNombre] = userState(' Prueba')
console.log(nombre);
setNombre();

