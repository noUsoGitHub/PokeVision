import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{

  name!: string;
  image!: string;
  constructor(private pokemonService: PokemonService){}
  ngOnInit(): void{

  }
  search(){
    this.pokemonService.getPokemon(this.name).subscribe((data: any)=>
      {
        this.image = data.sprites.front_default
      })
  }
}
