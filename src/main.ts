import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { name, age } from './bases/01-types.ts'
import { pokemonMap, pokemonValue, bulbasaur,pokemons } from './bases/02-object-interfaz.ts'
import { pikachu } from './bases/03-class';
import { charmander } from './bases/05-decoration.ts'
import { animales } from './bases/06-decorator-02.ts'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
     
    <p class="read-the-docs">
   ${animales.scream()}
    ${charmander}
      ${pikachu.getMoves()}
    </p>
     <p class="read-the-docs">
      Soy ${pikachu.name}, url: ${pikachu.imageUrl}
      , metodo: ${pikachu.fight()}
    </p>
    <p class="read-the-docs">
      Soy ${name} y tengo ${age} años.
    </p>
    <p class="read-the-docs">
     Pokemones: ${pokemonValue.join(', ')}!!!
    </p>
    <p class="read-the-docs">
      ${pokemonMap.name} es el pokemon con el key ${pokemonMap.key} 
    </p>
     <p class="read-the-docs">
      con interface ${bulbasaur.name} es el pokemon con el key ${bulbasaur.key}
    </p>
     <p class="read-the-docs">
      list de pokemones ${pokemons}
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
