const MyDecorator = () => {
  return (target: Function) => {
    console.log(target);
    return NewPokemon;
  };
}
class NewPokemon {
  constructor(public readonly id: number, public name: String) {
  
  }
   scream() {
    console.log(`metodo scream`)
  }
  speak() {
    console.log(`metodo speak`)
  }
 
}

@MyDecorator()
export class Pokemon {
  constructor(public readonly id: number, public name: String) {
  
  }
   scream() {
    console.log(`${this.name.toUpperCase()}!!!`)
  }
  speak() {
    console.log(`My name is ${this.name}`)
  }
 
}
export const charmander = new Pokemon(1, 'charmander');

charmander.scream()
charmander.speak()


