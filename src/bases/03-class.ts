import axios from "axios";
import { PokeApiResponse } from "../interfaces/pokeapi-response.interface";

// definicion de clase explicita
export class Pokemon {
  // Properties
  isFighting: boolean;
  get imageUrl() {
    return `https://pokeapi.co/api/v2/pokemon/${this.hp}.png`;
  }
  // Constructor:readonly no permite modificaciones 
  constructor(public name: string,public readonly hp: number) {
    this.name = name;
    this.hp = hp;
    this.isFighting = false;
  }
  // Methods
  fight() {
    this.isFighting = true;
    return this.name = 'Charmander';
  }
  async getMoves(): Promise<string[]> {
    const { data } = await axios.get<PokeApiResponse>(`https://pokeapi.co/api/v2/pokemon/${this.hp}/`);
    console.table(data.moves.map(move => move.move.name));
    return data.moves.map(move => move.move.name);
    }
} 


export const pikachu = new Pokemon('Pikachu', 100);