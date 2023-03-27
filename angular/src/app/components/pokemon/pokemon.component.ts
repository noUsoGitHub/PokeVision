import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonData } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{

  name!: string
  pokemon!: Pokemon
  constructor(private pokemonService: PokemonService){}
  ngOnInit(): void{

  }
  search(){
    this.pokemonService.getPokemon(this.name).subscribe((data: any)=>
      {

        const pokemonData = data as PokemonData;
        this.pokemon = new Pokemon(pokemonData);
        console.log(this.pokemon.abilities)

      })
  }

}
