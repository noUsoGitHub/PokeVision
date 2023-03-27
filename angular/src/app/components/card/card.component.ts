import { Component, OnInit, Input} from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonComponent } from '../pokemon/pokemon.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  @Input() pokemon!: Pokemon
  constructor(){

  }
  ngOnInit(): void {

  }
}



