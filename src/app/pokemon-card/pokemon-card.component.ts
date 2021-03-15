import { Component, Input } from '@angular/core';
import { getPokemonImage, getPokemonNumber, PokemonModule } from '../pokemon/pokemon.module';
import { PokemonService } from '../pokemon.service'

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent {

  constructor(public pokemonService: PokemonService){

  }

  @Input()
  public pokemon: PokemonModule;

  public getPokemonImage = getPokemonImage;

  public getPokemonNumber = getPokemonNumber;
}