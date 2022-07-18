
/* Destruturacion de objeto
   Asignacion de destructuracion*/
const persona = {
    nombre:'alejandra',
    edad: 44,
    clave: '0920',
    rango: 'Teniente'
}

const { nombre, edad, clave } = persona;

console.log(persona.nombre);
console.log(`destructuracion nombre:  ${nombre}`);
console.log(persona.edad);
console.log(`destructuracion edad:  ${edad}`);
console.log(persona.clave);
console.log(`destructuracion clave:  ${clave}`);

const userContext = ( {nombre, edad, clave, rango = 'Capitan'} ) => {
   console.log(`destructuracion:  ${nombre} ${edad} ${clave}  ${rango}` );

   return{
    nombreClave:clave,
    anios: edad,
    latitud:{
        h: 100, 
        L: 34
    }

    }
}



const{ nombreClave, anios, latitud:{ h,L }} = userContext(persona);
//const {h, L} = latitud;  

console.log(`userContext:  ${nombreClave} ${anios}` );
console.log(`latitud:  ${h}  ${L}` );
