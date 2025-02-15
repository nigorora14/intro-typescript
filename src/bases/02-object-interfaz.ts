export const pokemonKey = [1, 3, 4, 5, 6, 7, 8, 9]
export const pokemonValue = ['Bulbasaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise']

pokemonKey.push(10);

export const pokemonMap = {
  key:pokemonKey[0],
  name: pokemonValue[0]
}

interface Pokemon {
  key: number,
  name: string,
  age?: number
}

export const bulbasaur: Pokemon = {
  key: 1,
  name: 'Bulbasaur'
}

export const pokemons: Pokemon[] = []
pokemons.push(bulbasaur, {key: 2, name: 'Ivysaur'})
