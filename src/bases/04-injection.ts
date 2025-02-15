import { Move, PokeApiResponse } from "../interfaces/pokeapi-response.interface";
import { HttpAdapter, PokeApiAdapter } from "../api/pokeApi.adapter";

// definicion de clase explicita
export class Pokemon {
  // Properties
  get imageUrl() {
    return `https://pokeapi.co/api/v2/pokemon/${this.hp}.png`;
  }
  // Constructor:readonly no permite modificaciones 
  constructor(public name: string,public readonly hp: number, private readonly http: HttpAdapter,) {
    this.name = name;
    this.hp = hp;
  }
  // Methods
  fight() {
    return this.name = 'Charmander';
  }
  async getMoves(): Promise<Move[]> { 
    
    const data = await this.http.get<PokeApiResponse>(this.imageUrl);
    console.table(data.moves.map(move => move.move.name));
    return data.moves;
    }
} 

const pokeApi = new PokeApiAdapter();
const pokeApiFecth = new PokeApiAdapter();
export const pikachu = new Pokemon('Pikachu', 100,pokeApiFecth);