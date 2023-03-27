import { PokemonComponent } from "../components/pokemon/pokemon.component";

export interface AbilityInfo {
  name: string;
  url: string;
}
export interface Ability {
  ability: AbilityInfo
  is_hidden: boolean
  slot: number
}

export interface Type {
  name: string;
  url: string;
}

export interface Sprite {
  front_default: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonData {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: Ability[];
  types: Type[];
  sprites: Sprite;
  stats: Stat[];
}

export class Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: Ability[];
  types: Type[];
  sprites: Sprite;
  stats: Stat[];

  constructor(pokemonData: PokemonData) {
    this.id = pokemonData.id;
    this.name = pokemonData.name;
    this.height = pokemonData.height;
    this.weight = pokemonData.weight;
    this.abilities = pokemonData.abilities;
    this.types = pokemonData.types;
    this.sprites = pokemonData.sprites;
    this.stats = pokemonData.stats;
  }

  abilitiesToString(): string {
    let A = "";
    for (let index = 0; index < this.abilities.length; index++) {
      if (this.abilities[index].is_hidden)
        A = A + "Habilidad Oculta: "+this.abilities[index].ability.name + "\n";
      else
        A = A + "Habilidad "+(this.abilities[index].slot) +": "+this.abilities[index].ability.name + "\n";
    }
    return A;
  }
}
