const personas = {
 nombre:'alejandra',
 apellido: 'rodriguez',
 edad: 45,
 direccion: { 
                ciudad: 'San jose',
                zip: 53214,
                lat: 15.1112334,
                lng: 1233.11
            }
}




//copia de la referencia
const persona2 = personas;

//clone del objeto
const persona3 = { ...personas};
persona3.nombre = 'leudys'

console.log({personas});
console.table({personas});
console.log({persona2});
console.table({persona2});
console.table({persona3});
console.log({persona3});





