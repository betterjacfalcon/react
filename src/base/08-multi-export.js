import  heroes, {owners} from '../data/heroes'

console.log (owners);

export const getHeroesId = (id) => heroes.find((heroes) =>  heroes.id === id );

//console.log (getHeroesId(3));

export const getHeroesOwner = (owner) => heroes.filter((heroes) =>  heroes.owner === owner );

//console.log (getHeroesOwner('DC'));

