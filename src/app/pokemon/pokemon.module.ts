import { TypeModule } from '../type/type.module';
import { AbilitiesModule } from '../abilities/abilities.module'

export interface PokemonModule {
  image: string;
  number: number;
  name: string;
  types: TypeModule[];
  abilities: AbilitiesModule[];
}

export function getPokemonImage(pokemon: PokemonModule): string {
  let url= 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'+getPokemonNumber(pokemon)+'.png';
  return url;
}

export function getPokemonNumber(pokemon: PokemonModule): string {
  return leadingZero(pokemon.number);
}

function leadingZero(str: string | number, size = 3): string {
  let s = String(str);

  while (s.length < (size || 2)) {
    s = '0' + s;
  }

  return s;
}