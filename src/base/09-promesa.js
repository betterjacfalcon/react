import { getHeroesId } from "./base/08-multi-export"; 

/*const promesa = new Promise( (resolve, reject) => {
    setTimeout(() =>{
        const heroe = getHeroesId(3);  
        console.log (heroe);
        resolve (heroe);
        //reject(heroe)
        //reject ('No se encontro el heroe');
    }, 2000)
});
    promesa.then( (heroe) => {
        console.log('heroe', heroe);    
})
    .catch(err => console.warn(err));*/

    const getHeroesIdAsync = (id) => {
        return  new Promise( (resolve, reject) => {
            setTimeout(() =>{
                const heroe = getHeroesId(id);                         
                if (heroe) {
                    resolve (heroe);
                }else{
                 reject ('No se encontro el heroe');
                }
            }, 2000)
        });
    }

    getHeroesIdAsync(20)
    .then( console.log)
    .catch(console.warn);